import { PcCase, Pencil, Settings2, Sparkles, Palette, PrinterCheck } from 'lucide-react'

export default function Features() {
    return (
        <section id='solutions' className="mt-[5vh] sm:mt-[10vh] md:mt-[30vh] lg:mt-[100vh] py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-5xl space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4 sm:px-6">
                <div className="flex justify-center">
                    <img className="w-32 sm:w-40 md:w-48 lg:w-56" src="/img/Logo1.png" alt="RafaConsultoria" />
                </div>
                <div className="relative z-10 mx-auto max-w-xl space-y-4 sm:space-y-5 text-center">
                    <h2 className="text-balance text-3xl sm:text-4xl font-medium lg:text-5xl">Soluções tecnológicas para o seu negócio</h2>
                </div>

                <div className="relative mx-auto -mt-3 grid max-w-4xl gap-4 sm:gap-6 sm:divide-x sm:divide-y border rounded-xl *:p-6 sm:*:p-8 md:*:p-10 lg:*:p-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <PrinterCheck className="size-8" />
                            <h3 className="text-sm   font-medium">Reset em Impressoras Epson</h3>
                        </div>
                        <p className="text-sm">Impressoras tem um limite de impressões, onde é preciso fazer o reset para continuar utilizando.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Palette className="size-12" />
                            <h3 className="text-sm font-medium">Instalação de Perfil de Cores para Sublimação</h3>
                        </div>
                        <p className="text-sm">Suporte completo para desenvolvedores e empresas.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <PcCase className="size-7" />

                            <h3 className="text-sm font-medium">Instalação de Programas</h3>
                        </div>
                        <p className="text-sm">Suporte completo para desenvolvedores e empresas.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Customization</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Control</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Built for AI</h3>
                        </div>
                        <p className="text-sm">It supports helping developers and businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
