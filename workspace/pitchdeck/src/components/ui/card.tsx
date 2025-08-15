import React from "react";

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
	return (
		<div className={`bg-white ${className}`} {...props} />
	);
}

export function CardContent({ className = "", ...props }: DivProps) {
	return (
		<div className={`p-6 ${className}`} {...props} />
	);
}