import React from "react";

import "./Search.css"

const Search = () => {
    return (
        <div>
            <div class="search-wrapper">
                <form>
                    <input type="text" placeholder="Поиск по Москве"/>
                        <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default Search;