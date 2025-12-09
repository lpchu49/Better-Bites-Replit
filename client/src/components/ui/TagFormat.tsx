import { cn } from "@/lib/utils";
import React from "react";

interface TagFormatProps extends React.HTMLAttributes<HTMLElement> {
    as?: "span" | "div" | "p";
}

export function TagFormat({
    className,
    children,
    as: Component = "span",
    ...props
}: TagFormatProps) {
    return (
        <Component
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
