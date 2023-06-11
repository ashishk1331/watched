"use client";

import { useState } from "react";
import Item from "./ListItem";
import { useStore } from "../util/useStore";

export default function (props) {
	const collection = useStore((state) => state.collection);

	return (
		<ul className="w-full grid grid-cols-2 gap-6">
			<h3 className="font-medium text-xl w-full col-span-2">
				My collection ({collection.length})
			</h3>

			{collection.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</ul>
	);
}
