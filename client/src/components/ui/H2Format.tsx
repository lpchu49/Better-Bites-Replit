import { cn } from "@/lib/utils";
import React from "react";

interface H2FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H2Format({
    className,
    children,
    as: Component = "h2",
    ...props
}: H2FormatProps) {
    return (
        <Component
            className={cn(
                "text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
