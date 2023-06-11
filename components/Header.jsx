"use client";

import Button from "./Button";
import { MagnifyingGlass, User } from "@phosphor-icons/react";

export default function (props) {
	return (
		<header className="w-full flex items-center gap-3">
			<h1 className="text-3xl font-bold tracking-tight uppercase text-sunset">
				Watched
			</h1>

			<Button
				className="ml-auto"
				onClick={(e) => props.setShowSearch(true)}
			>
				<MagnifyingGlass size={22} color="black" />
			</Button>

			<Button onClick={(e) => props.setOpenModal(true)}>
				<User size={22} color="black" />
			</Button>
		</header>
	);
}
