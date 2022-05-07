import "../style/css/searchBar.css";

const SearchBar = ({filters, removeFilter, clearAllFilters}) => {
    return ( 
        <header className="searchBox">
            {filters.length > 0 && <div className="searchRow">
                <div className="filters">
                    {filters.map(item => 
                        <p className="tag" key={item}>
                            {item}
                            <button className="XBtn" onClick={() => removeFilter(item)}>X</button>
                        </p>
                    )}
                </div>
                <button className="clearBtn" onClick={() => clearAllFilters()}>Clear</button>
            </div>}
        </header>
    );
}
 
export default SearchBar;
