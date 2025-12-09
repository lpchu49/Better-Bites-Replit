import { cn } from "@/lib/utils";
import React from "react";

interface H1BodyFormatProps extends React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div";
}

export function H1BodyFormat({
    className,
    children,
    as: Component = "p",
    ...props
}: H1BodyFormatProps) {
    return (
        <Component
            className={cn(
                "text-xl md:text-2xl text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
