import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Imagem que aparece ao compartilhar o site (WhatsApp, LinkedIn, Facebook, X...).
// Gerada no build a partir da logo e da foto do hero.

export const alt = 'Rafa Consultoria — Tecnologia completa para o seu negócio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function toDataUrl(path: string) {
    const file = await readFile(join(process.cwd(), 'public', path))
    return `data:image/png;base64,${file.toString('base64')}`
}

export default async function OpengraphImage() {
    const [logo, photo] = await Promise.all([toDataUrl('img/Logobranca.png'), toDataUrl('img/foto4.png')])

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '64px 72px',
                    backgroundColor: '#0a0a0a',
                    backgroundImage:
                        'radial-gradient(circle at 85% 20%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 70% 90%, rgba(239,68,68,0.16), transparent 45%), radial-gradient(circle at 10% 10%, rgba(251,191,36,0.10), transparent 40%)',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} width={326} height={140} alt="" />
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 40, fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
                        <span>Tecnologia completa para o&nbsp;</span>
                        <span
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #fbbf24, #ef4444, #0ea5e9)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                // Folga para a perninha do "g" não ser cortada pelo gradiente
                                paddingBottom: 14,
                                marginBottom: -14,
                            }}
                        >
                            seu negócio
                        </span>
                    </div>
                    <div style={{ display: 'flex', marginTop: 28, fontSize: 28, color: 'rgba(255,255,255,0.7)' }}>
                        Desenvolvimento de sites · Suporte de TI
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: 340,
                        height: 476,
                        borderRadius: 32,
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.12)',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo} width={340} height={479} alt="" style={{ objectFit: 'cover' }} />
                </div>
            </div>
        ),
        size,
    )
}
