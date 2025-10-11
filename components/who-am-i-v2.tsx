import React from 'react'
import { Users, Zap, Target } from 'lucide-react'

// --- Modelo 4: Foco na Imagem com Estatísticas ---
export const WhoAmI_Stats = () => {
    return (
        <section id="quem-sou-eu" className="relative pt-20 lg:pt-32 pb-10 lg:pb-16 text-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Guiado por Resultados e Paixão</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Com uma abordagem estratégica e foco incansável na qualidade, meu objetivo é entregar não apenas soluções, mas resultados que impulsionam o crescimento e a inovação. Cada projeto é uma nova oportunidade de criar valor duradouro.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-primary">10+</p>
                            <p className="text-gray-400 mt-1">Anos de Experiência</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary">50+</p>
                            <p className="text-gray-400 mt-1">Projetos Concluídos</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary">99%</p>
                            <p className="text-gray-400 mt-1">Satisfação de Clientes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// --- Modelo 5: Formato Pergunta e Resposta (Q&A) ---
export const WhoAmI_QA = () => {
    const qaItems = [
        {
            icon: <Target className="w-8 h-8 text-primary" />,
            question: "Minha filosofia de trabalho?",
            answer: "Acredito na transparência radical e na colaboração. O sucesso de um projeto é construído com comunicação clara e objetivos alinhados entre todas as partes."
        },
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            question: "O que me motiva?",
            answer: "Resolver quebra-cabeças complexos. Encaro cada desafio como uma oportunidade de aprender algo novo e aplicar minha criatividade para encontrar a solução mais eficaz."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            question: "Como eu colaboro com clientes?",
            answer: "Meu processo é de parceria. Trabalho lado a lado com meus clientes para entender profundamente suas necessidades e garantir que a solução final exceda as expectativas."
        }
    ]

    return (
        <section id="quem-sou-eu-qa" className="pt-10 lg:pt-16 pb-20 lg:pb-32 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold">Conheça um Pouco Mais</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                        Alguns pilares que guiam meu trabalho e minha forma de pensar.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {qaItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 border border-gray-700 bg-gray-800/50 rounded-xl hover:shadow-lg hover:bg-gray-800 transition-all duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.question}</h3>
                            <p className="text-muted-foreground">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}