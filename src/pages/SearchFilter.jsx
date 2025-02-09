import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {
    const handleInput=(e)=>{
        e.preventDefault();
     setSearch(e.target.value);
    }
    const sortCountries=(value)=>{
           const sortCountry=[...countries].sort((a,b)=>{
            return value==="asc"?a.name.common.localeCompare(b.name.common):
            b.name.common.localeCompare(a.name.common);
           });
           setCountries(sortCountry);
    }
  return (
    <section className='section-searchFilter container'>
        <div>
        <input type='text' placeholder='search' value={search} onChange={(e)=>handleInput(e)} />
        </div>
        <div>
            <button onClick={()=>sortCountries("asc")}>Asc</button>  
        </div>
        <div>
            <button onClick={()=>sortCountries("desc")}>Desc</button>  
        </div>
        <div>
            <select className='select-section' value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Africe">Africa</option>
                <option value="america">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>
    </section>
  )
}

export default SearchFilter