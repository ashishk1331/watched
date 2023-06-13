"use client";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";

import { useState, useEffect } from "react";
import { useStore } from "../util/useStore";
import { getSession, listDoc } from "../util/useAppwrite";

export default function () {
	const [showSearch, setShowSearch] = useState(false);
	const user = useStore((state) => state.user);
	const collectionID = useStore((state) => state.collectionID);
	const setCollectionID = useStore((state) => state.setCollectionID);
	const setUser = useStore((state) => state.setUser);
	const setLoading = useStore((state) => state.setLoading);

	useEffect(() => {
		if (user === null) {
			setLoading(true);
			getSession()
				.then((resp) => {
					setUser(resp);
					if (collectionID === null) {
						(async function () {
							let result = await fetch('/api/getCollectionID', {
								method: 'POST',
								body: JSON.stringify({
									userName: resp['email'],
									userID: resp['$id']
								})
							});
							result = await result.json()
							console.log(result)
							setCollectionID(result.collectionID)
						})();
					}
					listDoc()
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		} else {
			listDoc()
		}
	}, []);

	return (
		<main className="flex min-h-screen max-w-md mx-auto flex-col items-center p-6 gap-6">
			{user === null ? (
				<Login />
			) : showSearch ? (
				<Search setShowSearch={setShowSearch} />
			) : (
				<Home setShowSearch={setShowSearch} />
			)}
		</main>
	);
}
