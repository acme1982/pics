import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization:
					'Client-ID b070997e9eeec4d5874fac68ae9604a20327f376f87ce5cf7eb7bac0e1e17f00'
			}
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} Images
			</div>
		);
	}
}

export default App;
