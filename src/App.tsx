import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import './App.css';
import { apolloQuery } from './components/api';
import { Results } from './components/Results/Results';
import { Search } from './components/Search/Search';

function App() {

  const [searchQuery, setSearchQuery] = useState<string>('')
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
      <Results 
          loading={loading}
          error={error}
          data={data}
          setRickImage={setRickImage}
          setMortyImage={setMortyImage}
      />
    </div>
  );
}

export default App;
