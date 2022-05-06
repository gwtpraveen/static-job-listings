const SearchBar = ({filters, removeFilter, clearAllFilters}) => {
    return ( 
        <header>
            {filters.map(item => <p key={item}>{item}<button onClick={() => removeFilter(item)}>X</button></p>)}  
            {filters.length > 0 && <button onClick={() => clearAllFilters()}>Clear</button>}  
        </header>
    );
}
 
export default SearchBar;
