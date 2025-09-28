import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="app/public/logo.png"
            alt="Logo"
            className={cn('h-12 w-auto', className)}
        />
    )
}
