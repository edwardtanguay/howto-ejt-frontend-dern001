import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const baseUrl = 'http://localhost:3007';
const url = `${baseUrl}/all`;

function App() {
	const [siteData, setSiteData] = useState({});
	// const [searchItems, setSearchItems] = useState([]);

	useEffect(() => {
		(async () => {
			setSiteData((await axios.get(url)).data);
		})();
	}, []);

	return (
		<div className="App">
			{Object.entries(siteData).length === 0 ? (
				<div>Loading...</div>
			) : (
				<>
					<h1>Landscape Photos</h1>
					<div className="landscapePhotos">
						{siteData.landscapePhotos.map((photo, i) => {
							return (
								<div key={i}>
									<img src={`${baseUrl}/images/${photo}`} />
								</div>
							);
						})}
					</div>

					<h1>Nouns</h1>
					<div className="nouns">
						{siteData.nouns.map((noun, i) => {
							return (
								<div key={i}>
									{noun.article} {noun.singular}
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
