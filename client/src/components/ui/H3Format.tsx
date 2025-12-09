import { cn } from "@/lib/utils";
import React from "react";

interface H3FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H3Format({
    className,
    children,
    as: Component = "h3",
    ...props
}: H3FormatProps) {
    return (
        <Component
            className={cn(
                "text-2xl md:text-4xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
