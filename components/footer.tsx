import { Logo } from '@/components/logo'
import { Twitter, Linkedin, Github } from 'lucide-react'

const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem sou eu', href: '#quem-sou-eu' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Contato', href: '#contato' },
]

export const Footer = () => {
    return (
        <footer className="text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Logo and Social */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="max-w-xs text-sm">
                            Consultoria especializada em soluções de tecnologia e inovação para empresas que buscam crescimento e eficiência.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin /></a>
                            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            {menuItems.map(item => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contato</h3>
                        <ul className="space-y-2">
                            <li><a href="tel:+5522992133502" className="hover:text-white transition-colors">(22) 99213-3502</a></li>
                            <li><a href="mailto:rmarcolino@rafaelmarcolino.online" className="hover:text-white transition-colors">rmarcolino@rafaelmarcolino.online</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} RafaConsultoria. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
