'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextEffect } from '@/components/ui/text-effect'
import { HeroHeader } from './header'

// Adicione ou remova vídeos nesta lista.
// Certifique-se de que os arquivos de vídeo estejam na pasta /public/img/
const videos = [
    '/img/consultoria1.mp4',
    '/img/consultoria2.mp4',
    // '/img/seu-novo-video-1.mp4', // Exemplo
    // '/img/seu-novo-video-2.mp4', // Exemplo
]

const logoAnimation = {
  hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export default function HeroSection() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play().catch(error => console.error("Video play failed: ", error));
        }
    }, [currentVideoIndex])

    return (
        <>
            <HeroHeader />
            <main id='inicio' className="relative overflow-hidden h-screen">
                <video
                    ref={videoRef}
                    src={videos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                />
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 -z-10" />
                <section className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={logoAnimation}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <Image
                                    src="/img/Logobranca.png"
                                    alt="Logo"
                                    width={400}
                                    height={400}
                                    className="mx-auto mb-8"
                                    priority
                                />
                            </motion.div>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                delay={0.5} // Atraso para começar depois da logo
                                className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                Temos a Solução para os seus problemas
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.8} // Atraso maior para o parágrafo
                                as="p"
                                className="mx-auto mt-8 max-w-2xl text-balance text-lg font-medium">
                                Com a nossa Consultoria especializada, seu negócio alcançará novos patamares de sucesso e eficiência.
                            </TextEffect>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}