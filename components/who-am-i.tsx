/*
 * Modelos para a seção "Quem sou eu".
 *
 * IMPORTANTE: Estes componentes dependem de outros componentes shadcn-ui.
 * Se eles não estiverem instalados, você pode adicioná-los com os seguintes comandos:
 * npx shadcn-ui@latest add card
 * npx shadcn-ui@latest add badge
 * npx shadcn-ui@latest add avatar
 */
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Briefcase, Award, Coffee } from 'lucide-react'

// --- Modelo 1: Clássico e Profissional ---
export const WhoAmI_Classic = () => {
    return (
        <section id="quemsoueu" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1 flex justify-center">
                        <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-primary">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Foto de Perfil" />
                            <AvatarFallback>EU</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quem sou eu</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Sou um profissional apaixonado por tecnologia e inovação, com mais de 10 anos de experiência em ajudar empresas a atingirem seu potencial máximo. Minha missão é transformar desafios complexos em soluções simples e eficientes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Gestão de Projetos</Badge>
                            <Badge variant="secondary">Consultoria Estratégica</Badge>
                            <Badge variant="secondary">Desenvolvimento de Software</Badge>
                            <Badge variant="secondary">Liderança de Equipes</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// --- Modelo 2: Moderno e Minimalista ---
export const WhoAmI_Modern = () => {
    return (
        <section id="quemsoueu" className="py-20 lg:py-32">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Transformando Ideias em Realidade
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
                    Minha jornada é movida pela curiosidade e pela busca incessante por soluções que não apenas resolvem problemas, mas que também inspiram e abrem novos caminhos. Acredito no poder da colaboração e da tecnologia para construir um futuro melhor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <Briefcase className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold">Experiência</h3>
                        <p className="text-muted-foreground">10+ anos no mercado</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold">Resultados</h3>
                        <p className="text-muted-foreground">Foco em crescimento e eficiência</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Coffee className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-semibold">Abordagem</h3>
                        <p className="text-muted-foreground">Colaborativa e personalizada</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


// --- Modelo 3: Linha do Tempo / Jornada ---
export const WhoAmI_Timeline = () => {
    const timelineEvents = [
        {
            year: "2012",
            title: "Início da Jornada",
            description: "Comecei minha carreira na área de tecnologia, fascinado pelo potencial da programação e da lógica."
        },
        {
            year: "2016",
            title: "Primeira Liderança",
            description: "Assumi meu primeiro cargo de liderança, onde descobri a paixão por desenvolver pessoas e equipes de alta performance."
        },
        {
            year: "2020",
            title: "Fundação da Consultoria",
            description: "Decidi empreender e fundei minha própria consultoria para aplicar minha visão e ajudar mais empresas a se transformarem."
        },
        {
            year: "Hoje",
            title: "Expandindo Horizontes",
            description: "Continuo aprendendo, inovando e buscando novos desafios para criar um impacto positivo no mundo dos negócios."
        }
    ]

    return (
        <section id="quemsoueu" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold">Minha Jornada</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                        Uma trajetória de aprendizado, desafios e conquistas.
                    </p>
                </div>
                <div className="relative flow-root">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="relative flex items-center justify-center mb-12">
                             <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
                             <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                                <div className={`p-4 rounded-lg ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                                    <p className="text-primary font-semibold text-lg mb-1">{event.year}</p>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{event.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{event.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                             <div className={`hidden lg:block w-1/2 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                                {/* Empty div for spacing */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
