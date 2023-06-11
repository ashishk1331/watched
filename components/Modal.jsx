"use client";
import { ArrowSquareRight } from "@phosphor-icons/react";
import Button from "../components/Button";
import { useStore } from "../util/useStore";
import { logOut } from "../util/useAppwrite";

export default function (props) {
	const user = useStore((state) => state.user);
	const setUser = useStore((state) => state.setUser);

	return (
		<div className="fixed inset-0 w-screen h-screen bg-back/25 flex backdrop-blur">
			<div className="m-auto flex flex-col items-center gap-6 bg-black rounded-md shadow p-6">
				<ArrowSquareRight size={22} className="text-sunset" />

				<h3 className="w-fit flex flex-col items-center gap-3">
					Do you want to log out ?
					<p className="border-b-4 border-sunset">
						{user?.email || ""}
					</p>
				</h3>

				<Button
					className="w-full"
					onClick={(e) =>
						logOut()
							.then((resp) => setUser(null))
							.catch((err) => console.log(err))
					}
				>
					Log out
				</Button>

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
