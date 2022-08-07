import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const Items = ({ collection }) => {
	console.log('e', collection);
	return collection.map((nft) => <div className='nfts'>
		NFTs on address
		<img src={nft.metadata.image} alt="nft" className='nft-image'/>
		<span>{nft.metadata.description}</span>
	</div>);
}

const App = () => {
	const [collection, setCollection] = useState('');

	const fetchCollection = async () => {
		const response = await fetch('https://polygon-mumbai.g.alchemy.com/nft/v2/DE-EIfLWOLhewB6U6MT5EJXqvLutDPoH/getNFTsForCollection?contractAddress=0x8991f160A6e0D10803201A8dDA333CB60C350A0c&withMetadata=true&limit=5');
		const fetchedCollection = await response.json();
		setCollection(fetchedCollection.nfts);
	}

	React.useEffect(() => {
		fetchCollection();
	}, [])

	return (
		<div className="App">
			{/* Creat an Items component */}
			{collection && <Items collection={collection} />}
			test
		</div>
	);
}

export default App;