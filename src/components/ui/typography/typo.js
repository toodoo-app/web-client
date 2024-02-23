'use client'

import { cn } from "@/lib/utils";
import { figtree } from "@/lib/fonts";

export function TypographyH1({ className, children }) {
    return (
      <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className, figtree.className)}>
        {children}
      </h1>
    )
}

export function TypographyMuted({ className, children }) {
    return (
      <p className={cn("text-sm text-muted-foreground", className)}>
        {children}
      </p>
    )
}

export function TypographyP({ className, children }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      { children }
    </p>
  )
}

export function TypographySmall({ className, children }) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      { children }
    </small>
  )
}