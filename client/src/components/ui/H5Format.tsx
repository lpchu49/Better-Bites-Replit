import { cn } from "@/lib/utils";
import React from "react";

interface H5FormatProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function H5Format({
    className,
    children,
    as: Component = "h5",
    ...props
}: H5FormatProps) {
    return (
        <Component
            className={cn(
                "text-xl md:text-2xl font-serif font-bold text-foreground leading-tight tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
