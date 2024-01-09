import React, { useState, useEffect } from 'react'
import Country from './Country'

function Countries({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(null)
	const [searchString, setSearchString] = useState("")

	useEffect(() => setFilteredCountries(countries
		.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))	
	), [searchString, countries])

	return (
		<div className='countries'>
			<input type="text" placeholder="search" onChange={event => setSearchString(event.target.value)}/>

			{searchString === "" 
				? 
				countries.map((country, index) => <Country country={country} key={index}/>)
				:
				filteredCountries.map((country, index) => <Country country={country} key={index}/>)
			}
		</div>
	)
}

export default Countries