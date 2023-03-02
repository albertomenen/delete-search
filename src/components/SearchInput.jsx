import React from "react"



export default function SearchInput ({handleSearch}) {

    return (

        <div>

            <input type = "text" placeholder="Looking for.." onChange={e => handleSearch(e.target.value)}></input>
        </div>
    )
}

