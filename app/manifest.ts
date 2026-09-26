import type { MetadataRoute } from 'next'

// Permite "Adicionar à tela inicial" no celular com nome, ícone e cores corretos.
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Rafa Consultoria',
        short_name: 'Rafa',
        description: 'Desenvolvimento de sites e suporte de TI.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        icons: [
            { src: '/icon.png', sizes: '512x512', type: 'image/png' },
            { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    }
}
