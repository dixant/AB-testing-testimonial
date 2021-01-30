import React, { useState } from 'react';
import './Header.css';
import { Select } from '@material-ui/core';
import { TestimonialList } from '../testimonials/TestimonialList';
export default function Header(props) {
	const [country, setCountry] = useState({});
	return (
		<header className='header-fixed'>
			<div className='header-limiter'>
				<h1>
					<a href='/'>
						AB<span>Testimonials</span>
					</a>
				</h1>

				<nav>
					<Select
						native
						value={country}
						onChange={({target: {value}}) => {
							console.log(value);
							setCountry(value);
							props.selectedCountryHandle(value);
						}}
						label='Country'
						name='country'
						className='select-country'
					>
                        {Object.values(TestimonialList).map((country, i) => {
                            console.log(country);
                            return (
                                <option value={country.value} key={i}>
									{country.name}
								</option>
							);
						})}
					</Select>
				</nav>
			</div>
		</header>
	);
}
