import React from 'react'

function Country({ country }) {
	return (
		<div className='country'>
			{country.name.common}
			{country.population}
		</div>
	)
}

export default Country