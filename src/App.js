import './styles/App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import component from './components/component';
import { TestimonialList } from './components/testimonials/TestimonialList';

function App() {
	const [selectedCountry, setSelectedCountry] = useState('india');
	const selectedCountryHandle = (props) => {
		console.log(props);
		setSelectedCountry(props);
	};
	return (
		<div className='App'>
			<Header selectedCountryHandle={selectedCountryHandle} />
			{component(TestimonialList[selectedCountry])}
		</div>
	);
}

export default App;
