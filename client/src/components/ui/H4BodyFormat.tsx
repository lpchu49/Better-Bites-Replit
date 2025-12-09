import { cn } from "@/lib/utils";
import React from "react";

interface H4BodyFormatProps extends React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div";
}

export function H4BodyFormat({
    className,
    children,
    as: Component = "p",
    ...props
}: H4BodyFormatProps) {
    return (
        <Component
            className={cn(
                "text-sm md:text-base text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
