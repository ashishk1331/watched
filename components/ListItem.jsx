"use client";
import Image from "next/image";

export default function (props) {
	return (
		<li className="flex flex-col gap-3 mb-6">
			<div className="aspect-[9/16] bg-sunset overflow-hidden rounded-md">
				<Image
					src={"https://image.tmdb.org/t/p/w500" + props.poster_path}
					width={500}
					height={281.25}
					alt={props.original_title}
					className="h-full object-cover"
				/>
			</div>
			<h3>{props.title}</h3>
		</li>
	);
}
