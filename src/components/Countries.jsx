import React, { useState } from 'react'
import Country from './Country'

function Countries({ countries, setSearchName }) {
	const [sort, setSort] = useState("asc") // "desc"

	return (
		<div className='countries'>
			<input type="text" placeholder="search" onChange={event => setSearchName(event.target.value)}/>

			<button onClick={() => {
				sort === "asc" ? setSort("desc") : setSort("asc")
			}}>{sort === "desc" ? "sort by ascending" : "sort by descending"}</button>

			{sort === "asc" 
				? 
				[...countries]
					.sort((a, b) => a.name.common.localeCompare(b.name.common))
					.map((country, index) => <Country country={country} key={index} />)
				:
				[...countries]
					.sort((a, b) => b.name.common.localeCompare(a.name.common))
					.map((country, index) => <Country country={country} key={index} />)
			}
		</div>
	)
}

export default Countries