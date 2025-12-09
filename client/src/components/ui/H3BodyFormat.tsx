import { cn } from "@/lib/utils";
import React from "react";

interface H3BodyFormatProps extends React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div";
}

export function H3BodyFormat({
    className,
    children,
    as: Component = "p",
    ...props
}: H3BodyFormatProps) {
    return (
        <Component
            className={cn(
                "text-base md:text-lg text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
