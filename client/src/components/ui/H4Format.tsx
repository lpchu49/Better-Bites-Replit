import { cn } from "@/lib/utils";
import React from "react";

interface H4FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H4Format({
    className,
    children,
    as: Component = "h4",
    ...props
}: H4FormatProps) {
    return (
        <Component
            className={cn(
                "text-xl md:text-3xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
