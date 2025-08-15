import React from 'react'

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return (
		<div className={`bg-white border border-gray-200 ${className}`}>
			{children}
		</div>
	)
}

export function CardContent({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={className}>{children}</div>
}