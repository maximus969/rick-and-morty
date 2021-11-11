import { useLazyQuery } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { apolloQuery } from './components/api';
import { Party } from './components/Party/Party';
import { Results } from './components/Results/Results';
import { Search } from './components/Search/Search';
import * as _ from 'lodash';

function App() {

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [RickImage, setRickImage] = useState<string>('')
  const [MortyImage, setMortyImage] = useState<string>('')
  const [getCharacters, { loading, data, error }] = useLazyQuery(apolloQuery)

  const throttledGetCharacters = useCallback(
    _.throttle(getCharacters, 3000),
  [])
  
  useEffect(() => {
    if (searchQuery.length > 2) {
      throttledGetCharacters({ variables: {searchQuery}})
    } 
  }, [searchQuery, throttledGetCharacters])
 
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
      <Party RickImage={RickImage} MortyImage={MortyImage} />
    </div>
  );
}

export default App;
