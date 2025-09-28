import { cn } from '@/lib/utils'
import React from 'react'

export const Logo = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/img/Logo.png"
            alt="Logo"
            className={cn('h-12 w-auto', className)}
        />
    )
}
