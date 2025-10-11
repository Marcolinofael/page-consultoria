import { PcCase, Pencil, Settings2, Sparkles, Palette, PrinterCheck } from 'lucide-react'

export default function Features() {
    return (
        <section id='solutions' className="pt-20 lg:pt-24 pb-10 lg:pb-12 mb-20 text-white">
            <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10 px-4 sm:px-6">
                <div className="flex justify-center">
                    <img className="w-32 sm:w-40 md:w-48" src="/img/Logobranca.png" alt="RafaConsultoria" />
                </div>
                <div className="relative z-10 mx-auto max-w-xl space-y-4 sm:space-y-5 text-center">
                    <h2 className="text-balance text-3xl sm:text-4xl font-medium lg:text-5xl text-white">Soluções Tecnológicas para o seu Negócio</h2>
                </div>

                <div className="relative mx-auto grid max-w-4xl gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <PrinterCheck className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Reset de Impressoras</h3>
                        <p className="text-sm text-muted-foreground">Impressoras Epson têm um limite de impressões. Fazemos o reset para que você possa continuar utilizando seu equipamento.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <Palette className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Perfil de Cores</h3>
                        <p className="text-sm text-muted-foreground">Instalação de perfil de cores para sublimação, garantindo a fidelidade do seu trabalho final.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <PcCase className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Instalação de Programas</h3>
                        <p className="text-sm text-muted-foreground">Instalação e configuração de softwares essenciais para o seu dia a dia de trabalho.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <Pencil className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Desenvolvimento de Sites</h3>
                        <p className="text-sm text-muted-foreground">Criação de sites e landing pages modernas e responsivas para o seu negócio.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <Settings2 className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Otimização de Sistemas</h3>
                        <p className="text-sm text-muted-foreground">Análise e melhoria de performance em sistemas existentes para maior eficiência.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-3 p-6 border border-white/20 rounded-lg bg-white/10">
                        <Sparkles className="size-8 text-primary" />
                        <h3 className="text-lg font-medium text-white">Automação de Tarefas</h3>
                        <p className="text-sm text-muted-foreground">Desenvolvimento de scripts e rotinas para automatizar tarefas repetitivas e manuais.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
