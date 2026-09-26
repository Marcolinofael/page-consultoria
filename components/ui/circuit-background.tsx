// CircuitBackground — trilhas de placa de circuito com pulsos de luz
// percorrendo-as. SVG puro, gerado a partir de uma seed fixa (mesmo
// resultado no servidor e no navegador). A animação fica no globals.css
// (.circuit-pulse).

import React from "react"
import { cn } from "@/lib/utils"

const WIDTH = 1440
const HEIGHT = 900
const STEP = 40
const COLS = WIDTH / STEP
const ROWS = Math.floor(HEIGHT / STEP)
const PULSE_COLORS = ["#fbbf24", "#ef4444", "#38bdf8"] // amarelo, vermelho e azul da logo
const PULSE_LENGTH = 60

// 8 direções, em sentido horário a partir da direita: pares = retas, ímpares = diagonais
const DIRS = [
  [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1],
] as const

type Trace = {
  d: string
  length: number
  start: [number, number]
  end: [number, number]
  pulse?: { color: string; duration: number; delay: number }
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function generateTraces(seed: number, count: number): Trace[] {
  const rand = mulberry32(seed)
  const occupied = new Set<string>()
  const traces: Trace[] = []

  for (let attempt = 0; attempt < count * 10 && traces.length < count; attempt++) {
    let i = Math.floor(rand() * (COLS + 1))
    let j = Math.floor(rand() * (ROWS + 1))
    if (occupied.has(`${i},${j}`)) continue

    let dir = Math.floor(rand() * 4) * 2
    const points: [number, number][] = [[i, j]]
    const taken = new Set([`${i},${j}`])
    const steps = 4 + Math.floor(rand() * 14)

    for (let s = 0; s < steps; s++) {
      // Diagonais são curtas: voltam logo para uma reta, como em uma placa real
      if (dir % 2 === 1 ? rand() < 0.7 : rand() < 0.18) {
        dir = (dir + (rand() < 0.5 ? 1 : 7)) % 8
      }
      const ni = i + DIRS[dir][0]
      const nj = j + DIRS[dir][1]
      const key = `${ni},${nj}`
      if (ni < 0 || nj < 0 || ni > COLS || nj > ROWS || occupied.has(key) || taken.has(key)) break
      i = ni
      j = nj
      taken.add(key)
      points.push([i, j])
    }
    if (points.length < 4) continue
    taken.forEach((key) => occupied.add(key))

    // Junta pontos alinhados para gerar um path limpo
    const corners = points.filter((p, idx) => {
      if (idx === 0 || idx === points.length - 1) return true
      const [a, b] = [points[idx - 1], points[idx + 1]]
      return p[0] - a[0] !== b[0] - p[0] || p[1] - a[1] !== b[1] - p[1]
    })
    const d = corners.map(([x, y], idx) => `${idx ? "L" : "M"}${x * STEP} ${y * STEP}`).join(" ")
    let length = 0
    for (let k = 1; k < points.length; k++) {
      const diagonal = points[k][0] !== points[k - 1][0] && points[k][1] !== points[k - 1][1]
      length += diagonal ? STEP * Math.SQRT2 : STEP
    }

    const trace: Trace = {
      d,
      length: Math.round(length),
      start: [points[0][0] * STEP, points[0][1] * STEP],
      end: [i * STEP, j * STEP],
    }
    if (rand() < 0.45) {
      const duration = 4 + rand() * 6
      trace.pulse = {
        color: PULSE_COLORS[Math.floor(rand() * PULSE_COLORS.length)],
        duration,
        delay: -rand() * duration,
      }
    }
    traces.push(trace)
  }
  return traces
}

const TRACES = generateTraces(1453, 80)

export function CircuitBackground({ className }: { className?: string }) {
  return (
    <div className={cn("bg-neutral-950", className)} aria-hidden="true">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {TRACES.map((t, idx) => (
            <path key={idx} d={t.d} />
          ))}
        </g>
        <g fill="#0a0a0a" stroke="rgba(255,255,255,0.16)" strokeWidth={1.5}>
          {TRACES.flatMap((t, idx) => [
            <circle key={`s${idx}`} cx={t.start[0]} cy={t.start[1]} r={3.5} />,
            <circle key={`e${idx}`} cx={t.end[0]} cy={t.end[1]} r={3.5} />,
          ])}
        </g>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {TRACES.filter((t) => t.pulse).map((t, idx) => {
            const style = {
              "--d": `${PULSE_LENGTH}px`,
              "--l": `${t.length}px`,
              animationDuration: `${t.pulse!.duration.toFixed(2)}s`,
              animationDelay: `${t.pulse!.delay.toFixed(2)}s`,
            } as React.CSSProperties
            const dash = `${PULSE_LENGTH} ${t.length}`
            return (
              <React.Fragment key={idx}>
                {/* brilho */}
                <path d={t.d} className="circuit-pulse" style={style} stroke={t.pulse!.color} strokeOpacity={0.25} strokeWidth={6} strokeDasharray={dash} />
                {/* núcleo */}
                <path d={t.d} className="circuit-pulse" style={style} stroke={t.pulse!.color} strokeWidth={2} strokeDasharray={dash} />
              </React.Fragment>
            )
          })}
        </g>
      </svg>
      {/* Escurece o centro para o texto ficar legível e deixa o circuito aparecer nas bordas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.85)_0%,rgba(10,10,10,0.55)_45%,transparent_85%)]" />
    </div>
  )
}
