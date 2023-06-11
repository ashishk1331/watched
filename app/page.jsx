"use client";
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'

import { useState } from 'react'
import { useStore } from '../util/useStore'

export default function() {

	const [ showSearch, setShowSearch ] = useState(false)
	const user = useStore(state => state.user)

	return (
		<main className="flex min-h-screen flex-col items-center p-6 gap-6">
			{
				( showSearch && <Search setShowSearch={setShowSearch}/> )
				||
				( user === null && <Login /> )
				||
				<Home setShowSearch={setShowSearch}/>
			}
		</main>
	);
}
