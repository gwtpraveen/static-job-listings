import { useState } from 'react';
import './App.css';
import Result from './component/result';
import SearchBar from './component/searchBar';
import data from "./data.json";

function App() {
  const [filters, setFilters] = useState([])

  
  const handleFilters = (filter) => {
    setFilters(preVal => {
      const newFilters = [...preVal];
      if (!newFilters.includes(filter)) {
        newFilters.push(filter);
      }
      return newFilters;
    });
  };


  const handleRemoveFilter = (filter) => {
    setFilters(preVal => {
      let newFilters = [...preVal];
      newFilters.splice(newFilters.indexOf(filter), 1);
      return newFilters;
    })
  }


  const handleClearAllFilters = () => {
    setFilters([]);
  }


  let filterdData = data;

  return (
    <>
      <SearchBar filters={filters} removeFilter={handleRemoveFilter} clearAllFilters={handleClearAllFilters}/>
      {filterdData.map(item => <Result key={item.id} data={item} getFilter={handleFilters}/>)}
    </>
  );
}

export default App;
