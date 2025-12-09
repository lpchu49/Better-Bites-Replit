import { cn } from "@/lib/utils";
import React from "react";

interface H1FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H1Format({
    className,
    children,
    as: Component = "h1",
    ...props
}: H1FormatProps) {
    return (
        <Component
            className={cn(
                "text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
