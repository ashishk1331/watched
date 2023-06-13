"use client";
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import Button from "../components/Button";
import Item from "../components/ListItem";
import { useStore } from "../util/useStore";
import { createDoc } from "../util/useAppwrite";
import { useState } from "react";

async function searchMovie(query) {
	let resp = await fetch("/api/getMovie", {
		method: "POST",
		body: JSON.stringify({ query }),
	});
	resp = await resp.json();
	return resp;
}

export default function (props) {
	const addItem = useStore((state) => state.addItem);
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	let timerID = null;

	async function handleSubmit(event) {
		event.preventDefault();

		if(timerID){
			clearTimeout(timerID)
		}
		timerID = setTimeout(async () => {
			setIsSearching(true);
			console.log("searchin");

			let { query } = event.target;
			query = query.value.trim();

			let data = await searchMovie(query);

			setResults(data.results);
			setIsSearching(false);

		}, 600)
	}

	return (
		<>
			<h3
				className="flex items-center gap-1 w-full cursor-pointer"
				onClick={(e) => props.setShowSearch(false)}
			>
				<CaretLeft size={22} weight="light" />
				back
			</h3>

			<form
				className="flex items-center gap-3 w-full"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Search movie..."
					name="query"
					className="w-full p-3 rounded-full bg-back border-2 border-gray-800"
				/>
				<Button className={twMerge(isSearching && 'bg-gray-600')}>
					<MagnifyingGlass size={22} color="black" />
				</Button>
			</form>

			<h3 className="font-medium text-xl w-full col-span-2">
				Results: {results.length}
			</h3>

			<ul className="w-full grid grid-cols-2 gap-6">
				{results.map((item) => (
					<Item
						key={item.id}
						{...item}
						search
						onClick={(e) => {
							addItem(item);
							props.setShowSearch(false);
							createDoc(item);
						}}
					/>
				))}
			</ul>
		</>
	);
}
