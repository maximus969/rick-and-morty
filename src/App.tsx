import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { apolloQuery } from './components/api';
import { Search } from './components/Search/Search';

function App() {

  const [searchQuery, setSearchQuery] = useState<string>('Rick')
  const [RickImage, setRickImage] = useState<string>('')
  const [MortyImage, setMortyImage] = useState<string>('')
  const [getCharacters, { loading, data, error }] = useLazyQuery(apolloQuery, {
    variables: {
      searchQuery: searchQuery
    }
  })

  

 
  return (
    <div className="App">
      <button onClick={() => {getCharacters({variables: {searchQuery}})}}>send</button>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default App;
