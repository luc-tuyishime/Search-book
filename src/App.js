import React, { useState } from 'react';
import axios from 'axios';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { DisplayBook } from './helper/displayBook';

import './App.css';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = async (e) => {
    const book = e.target.value;
    const bookMaxResult = `volumes?q=${book}`;
    setBook(book);
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/${bookMaxResult}`);
    return data.items ? setResult([...data.items]) : [];
  }

  console.log('voilaa', result);
  return (
    <div className="App">
      <h1>Search Book</h1>
      <SearchBox
        placeholder="search books"
        handleChange={handleChange}
      />
      <CardList result={DisplayBook(result, book)}>
      </CardList>
    </div>
  );
}

export default App;
