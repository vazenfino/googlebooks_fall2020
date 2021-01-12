import React  from 'react';

const Search = (props) =>{
    return (
            <div className="search">
                {
                    <form onSubmit={props.searchBook} action="">
                        <input placeholder= "Search Books" onChange={props.handleSearch} type="text"/>
                        <button type="submit">Search</button>
                        <select defaultValue="Sort" onChange={props.handleSort}>
                            <option disabled value="Sort">Sort</option>
                            <option value="Newest"> Newest</option>
                            <option value="oldest"> Oldest</option>
                        </select>
                    </form>
                }
            </div>

        );
    }

export default Search;
