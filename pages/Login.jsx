"use client";
import Button from "../components/Button";

export default function (props) {
	return (
		<>
			<form className="w-full flex flex-col items-left gap-6">
				<div className="w-48 h-48 p-4 px-6 aspect-square bg-sunset text-back rounded-full flex -mt-32 mx-auto">
					<p className="m-auto font-black text-2xl -mb-2">W</p>
				</div>

				<h3 className="w-fit mx-auto font-medium text-xl mb-6">Log into Watched</h3>

				<label htmlFor="email" className="w-full">
					<p className="ml-3 mb-1">Email</p>
					<input
						type="text"
						placeholder="enter your email"
						className="w-full p-3 rounded-md bg-back border-2 border-gray-800"
						id="email"
					/>
				</label>

				<label htmlFor="password" className="w-full">
					<p className="ml-3 mb-1">password</p>
					<input
						type="text"
						placeholder="enter your email"
						className="w-full p-3 rounded-md bg-back border-2 border-gray-800"
						id="password"
					/>
				</label>

				<Button className="font-medium mt-6">Submit</Button>
			</form>
		</>
	);
}
