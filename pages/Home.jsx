"use client";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { useState } from "react";

export default function (props) {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Header
				setShowSearch={props.setShowSearch}
				setOpenModal={setOpenModal}
			/>

			<p className="bg-sunset/25 p-6 rounded-md italic my-3">
				A safe collection of all the movies and shows you’ve watched so
				far.
			</p>

			<List />

			<Footer />

			{openModal && <Modal setOpenModal={setOpenModal} />}
		</>
	);
}
