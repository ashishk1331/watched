"use client";
import { twMerge } from "tailwind-merge";

export default function (props) {
	return (
		<button
			onClick={props.onClick}
			role={props.role}
			className={twMerge("p-3 bg-sunset text-black rounded-full", props.className)}
		>
			{props.children}
		</button>
	);
}
