"use client";
import { Waves, At } from "@phosphor-icons/react";

export default function (props) {
	return (
		<footer className="flex flex-col items-center gap-6 p-6 w-full">
			<Waves size={32} className="text-sunset" />
			<p className="flex items-center gap-2">
				created by
				<a
					href="https://github.com/ashishk1331"
					target="_blank"
					className="text-sunset flex items-center border-b-2 border-sunset"
				>
					<At size={18} />
					ashishk1331
				</a>
			</p>
		</footer>
	);
}
