import { cn } from "@/lib/utils"

export function TypographyH1({ className, children}) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
        {children}
      </h1>
    )
}

export function TypographyMuted({ className, children}) {
    return (
      <p className={cn("text-sm text-muted-foreground", className)}>
        {children}
      </p>
    )
}