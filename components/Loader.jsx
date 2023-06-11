"use client";
import { CircleNotch } from '@phosphor-icons/react'

export default function(props){
	return (
		<div className="fixed inset-0 min-w-screen min-h-screen flex bg-back/25 backdrop-blur-sm">
			<CircleNotch size={48} className="animate-spin m-auto text-sunset" />
		</div>
	)
}