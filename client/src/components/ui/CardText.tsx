import { cn } from "@/lib/utils";
import React from "react";

interface CardTextProps extends React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div";
}

export function CardText({
    className,
    children,
    as: Component = "p",
    ...props
}: CardTextProps) {
    return (
        <Component
            className={cn(
                "text-sm md:text-base text-muted-foreground leading-relaxed",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
