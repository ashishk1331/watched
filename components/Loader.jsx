"use client";
import { CircleNotch } from '@phosphor-icons/react'

export default function(props){
	return (
		<div className="fixed inset-0 min-w-screen min-h-screen p-24 flex bg-back/90 backdrop-blur-sm">
			<CircleNotch size={48} className="animate-spin m-auto text-sunset" />
		</div>
	)
}