"use client";
import Button from "../components/Button";
import Loader from "../components/Loader";

import { useStore } from "../util/useStore";
import { useState } from "react";
import { signUp, logIn, getSession } from "../util/useAppwrite";

export default function (props) {
	const loading = useStore((state) => state.loading);
	const setLoading = useStore((state) => state.setLoading);
	const setUser = useStore((state) => state.setUser);

	const [signIn, toggleSignIn] = useState(true);
	const [error, setError] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		let { email, password } = event.target;
		email = email.value;
		password = password.value;
		console.log(email, password);

		if (signIn) {
			let resp = await signUp(email, password);
			if (resp.message) {
				console.log(resp.message, resp.code);
				setError(resp.message);
			} else {
				getSession()
					.then((resp) => setUser(resp))
					.catch((err) => console.log(err));
			}
		} else {
			let resp = await logIn(email, password);
			if (resp.message) {
				console.log(resp.message, resp.code);
				setError(resp.message);
			} else {
				getSession()
					.then((resp) => setUser(resp))
					.catch((err) => console.log(err));
			}
		}

		setLoading(false);
	}

	return (
		<>
			<form
				className="relative w-full flex flex-col items-left gap-6"
				onSubmit={handleSubmit}
			>
				{loading && <Loader />}

				<div className="w-48 h-48 p-4 px-6 aspect-square bg-sunset text-back rounded-full flex -mt-32 mx-auto">
					<p className="m-auto font-black text-2xl -mb-2">W</p>
				</div>

				<h3 className="w-fit mx-auto font-medium text-xl uppercase">
					{!signIn ? "Log into" : "Sign Up for"}
					<p className="border-b-4 border-sunset inline-block ml-1">
						watched
					</p>
				</h3>

				{error.length > 0 && (
					<p className="bg-sunset/25 p-6 rounded-md italic">
						{error}
					</p>
				)}

				<label htmlFor="email" className="w-full">
					<p className="ml-3 mb-1">Email</p>
					<input
						type="email"
						name="email"
						placeholder="enter your email"
						className="w-full p-3 rounded-md bg-back border-2 border-gray-800"
						id="email"
						required
					/>
				</label>

				<label htmlFor="password" className="w-full">
					<p className="ml-3 mb-1">password</p>
					<input
						type="password"
						name="password"
						placeholder="enter your email"
						className="w-full p-3 rounded-md bg-back border-2 border-gray-800"
						id="password"
						required
					/>
				</label>

				<Button className="font-medium mt-6">Submit</Button>

				<h3 className="w-fit mx-auto">
					{signIn ? "Already a member?" : "Not yet registered?"}
					<a
						href="#"
						className="ml-1 border-b-2 border-sunset"
						onClick={(e) => toggleSignIn((prev) => !prev)}
					>
						{signIn ? "Log In" : "Sign Up"}
					</a>
				</h3>
			</form>
		</>
	);
}
