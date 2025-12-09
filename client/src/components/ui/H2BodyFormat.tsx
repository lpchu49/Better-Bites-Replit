import { cn } from "@/lib/utils";
import React from "react";

interface H2BodyFormatProps extends React.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div";
}

export function H2BodyFormat({
    className,
    children,
    as: Component = "p",
    ...props
}: H2BodyFormatProps) {
    return (
        <Component
            className={cn(
                "text-lg md:text-xl text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
