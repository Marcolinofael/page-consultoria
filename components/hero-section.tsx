'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Headset, MessageCircle } from 'lucide-react'
import { TextEffect } from '@/components/ui/text-effect'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'

const WHATSAPP_URL = 'https://wa.me/5522992133502?text=Olá%20Queria%20Saber%20Mais%20Sobre%20A%20Consultoria'

const fadeInBlur = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const serviceBadges = [
    { icon: Code2, title: 'Desenvolvimento Web', iconClass: 'text-amber-400', position: '-left-10 bottom-28', delay: 1.6 },
    { icon: Headset, title: 'Suporte de TI', iconClass: 'text-sky-400', position: '-right-4 bottom-8 xl:-right-10', delay: 1.8 },
]

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main id='inicio' className="relative flex min-h-svh flex-col overflow-hidden">
                <section className="relative z-10 flex flex-1 flex-col items-center justify-center pt-24 pb-4 text-white">
                    <div className="container mx-auto px-6 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
                        <div className="text-center sm:mx-auto lg:mx-0 lg:text-left">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInBlur}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <Image
                                    src="/img/Logobranca.png"
                                    alt="Logo"
                                    width={400}
                                    height={400}
                                    className="mx-auto mb-8 lg:mx-0"
                                    priority
                                />
                            </motion.div>
                            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mx-0 lg:mt-10 lg:text-6xl xl:text-7xl">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    delay={0.5} // Atraso para começar depois da logo
                                >
                                    Tecnologia completa para o
                                </TextEffect>{' '}
                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInBlur}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                    className="inline-block bg-linear-to-r from-amber-400 via-red-500 to-sky-500 bg-clip-text -mb-[0.25em] pb-[0.25em] text-transparent"
                                >
                                    seu negócio
                                </motion.span>
                            </h1>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={1.1} // Atraso maior para o parágrafo
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-balance text-lg font-medium text-white/75 md:text-xl lg:mx-0">
                                Do site profissional ao suporte de TI no dia a dia: uma única parceira cuidando de toda a sua estrutura digital.
                            </TextEffect>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInBlur}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                            >
                                <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
                                    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle />
                                        Fale no WhatsApp
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="w-full rounded-full border-white/30 bg-white/5 px-8 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:w-auto dark:border-white/30 dark:bg-white/5 dark:hover:bg-white/15">
                                    <Link href="#solutions">
                                        Ver soluções
                                        <ArrowRight />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Foto: só no desktop, para não empurrar o conteúdo no celular */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, filter: 'blur(12px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative mx-auto hidden w-fit lg:block"
                        >
                            {/* Brilho nas cores da logo atrás da foto */}
                            <div className="absolute -inset-8 rounded-[3rem] bg-linear-to-br from-amber-400/25 via-red-500/15 to-sky-500/25 blur-3xl" aria-hidden="true" />
                            <div className="relative aspect-[5/7] h-[min(68vh,34rem)] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
                                <Image
                                    src="/img/foto4.png"
                                    alt="Consultor da Rafa Consultoria"
                                    fill
                                    sizes="(min-width: 1024px) 28rem, 0px"
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Funde a base da foto com o fundo escuro da página */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-neutral-950/90 to-transparent" aria-hidden="true" />
                            </div>
                            {serviceBadges.map(({ icon: Icon, title, iconClass, position, delay }) => (
                                <motion.div
                                    key={title}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInBlur}
                                    transition={{ duration: 0.8, delay }}
                                    className={`absolute ${position} flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 shadow-xl backdrop-blur-md`}
                                >
                                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/5">
                                        <Icon className={`size-5 ${iconClass}`} />
                                    </span>
                                    <span className="text-left">
                                        <span className="block text-sm font-semibold">{title}</span>
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    )
}
