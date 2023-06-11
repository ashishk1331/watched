"use client";
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import Button from "../components/Button";
import Item from "../components/ListItem";
import { useStore } from "../util/useStore";

export default function (props) {
	const collection = useStore((state) => state.collection);

	return (
		<>
			<h3
				className="flex items-center gap-1 w-full cursor-pointer"
				onClick={(e) => props.setShowSearch(false)}
			>
				<CaretLeft size={22} weight="light" />
				back
			</h3>

			<form className="flex items-center gap-3 w-full">
				<input
					type="text"
					placeholder="Search movie..."
					className="w-full p-3 rounded-full bg-back border-2 border-gray-800"
				/>
				<Button>
					<MagnifyingGlass size={22} color="black" />
				</Button>
			</form>

			<h3 className="font-medium text-xl w-full col-span-2">
				Results: 2
			</h3>

			<ul className="w-full grid grid-cols-2 gap-6">
				{collection.slice(0, 2).map((item) => (
					<Item key={item.id} {...item} />
				))}
			</ul>
		</>
	);
}
