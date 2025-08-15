import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string
}

export function Button({ className = '', children, ...props }: ButtonProps) {
	return (
		<button
			className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-900 text-white hover:bg-gray-800 ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}