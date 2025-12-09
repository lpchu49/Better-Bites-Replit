import { cn } from "@/lib/utils";
import React from "react";

interface H6FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H6Format({
    className,
    children,
    as: Component = "h6",
    ...props
}: H6FormatProps) {
    return (
        <Component
            className={cn(
                "text-lg md:text-xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
