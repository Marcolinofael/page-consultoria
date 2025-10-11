'use client'
import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const message = formData.get('message') as string;
        const phoneNumber = '5524992998042'; // Seu número de WhatsApp aqui

        const whatsappMessage = `Olá, meu nome é ${name}, ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contato" className="pt-10 lg:pt-12 pb-20 lg:pb-24 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold">Entre em Contato</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                        Tem uma pergunta ou quer iniciar um projeto? Me envie uma mensagem.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" name="name" placeholder="Seu nome" className="bg-transparent border-white/20" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" name="message" placeholder="Como posso ajudar?" className="min-h-[150px] bg-transparent border-white/20" required />
                        </div>
                        <Button type="submit" size="lg" className="w-full">Enviar Mensagem via WhatsApp</Button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-6 bg-white/10 border border-white/20 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-white">Outras formas de contato</h3>
                        <p className="text-muted-foreground">
                            Você também pode me encontrar aqui. Sinta-se à vontade para ligar ou enviar um email diretamente.
                        </p>
                        <div className="space-y-4">
                            <a href="tel:+5524992998042" className="flex items-center gap-4 group">
                                <Phone className="w-6 h-6 text-primary" />
                                <span className="text-lg text-white group-hover:text-primary transition-colors">(24) 99299-8042</span>
                            </a>
                            <a href="mailto:contato@consultoria.com" className="flex items-center gap-4 group">
                                <Mail className="w-6 h-6 text-primary" />
                                <span className="text-lg text-white group-hover:text-primary transition-colors">contato@consultoria.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
