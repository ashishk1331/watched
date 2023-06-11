"use client";
import { ArrowSquareRight } from "@phosphor-icons/react";
import Button from "../components/Button";

export default function (props) {
	return (
		<div className="fixed inset-0 w-screen h-screen bg-back/25 flex backdrop-blur">
			<div className="m-auto flex flex-col items-center gap-6 bg-black rounded-md shadow p-6">
				<ArrowSquareRight size={22} className="text-sunset" />

				<h3>Do you want to log out ?</h3>

				<Button className="w-full">Log out</Button>

				<button
					className="border-b-2 border-back"
					onClick={(e) => props.setOpenModal(false)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
