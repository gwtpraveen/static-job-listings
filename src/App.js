import { useState } from 'react';
import './App.css';
import Result from './component/result';
import SearchBar from './component/searchBar';
import data from "./data.json";


function App() {
  const [filters, setFilters] = useState([])


  // handle add filters 
  const handleFilters = (filter) => {
    setFilters(preVal => {
      const newFilters = [...preVal];
      if (!newFilters.includes(filter)) {
        newFilters.push(filter);
      }
      return newFilters;
    });
  };


  // remove filters from filter list 
  const handleRemoveFilter = (filter) => {
    setFilters(preVal => {
      let newFilters = [...preVal];
      newFilters.splice(newFilters.indexOf(filter), 1);
      return newFilters;
    })
  }


  // clear all filters 
  const handleClearAllFilters = () => {
    setFilters([]);
  }


  // filtering data
  let filterdData = data;
  // loop through all applyed filters
  filters.forEach(item => {
    filterdData = filterdData.filter(
        job => job.role === item ||
        job.level === item ||
        job.languages.includes(item) || 
        job.tools.includes(item));
  });

  
  return (
    <>
      <SearchBar filters={filters} removeFilter={handleRemoveFilter} clearAllFilters={handleClearAllFilters}/>
      {filterdData.map(item => <Result key={item.id} data={item} getFilter={handleFilters}/>)}
    </>
  );
}

export default App;
