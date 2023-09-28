import React from "react";
import clsx from "clsx";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string;
    disabled?: boolean;
}

const Button = ({
    className,
    children,
    disabled = false,
    ...rest
}: OwnProps) => {
    return (
        <button
            className={clsx(
                "p-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-400 disabled:text-black rounded text-white active:animate-bobble disabled:animate-none",
                className,
            )}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
