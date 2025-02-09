import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/Loader';
import CountryCard from './CountryCard';
import SearchFilter from './SearchFilter';

const Country = () => {
    const[isPending,startTransition]=useTransition();
    const[countries,setCountries]=useState([]);
    const[search,setSearch]=useState();
    const[filter,setFilter]=useState("all");
    useEffect(()=>{
        startTransition(async()=>{const res=await getCountryData();
            console.log(res);
            setCountries(res.data);
        })
    },[])
    const searchCountry=(country)=>{
        if(search){
           return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }
    const filterRegion=(country)=>{
        if(filter=="all") return country;
        return country.region==filter;
    };
    const filterCountries=countries.filter((curr)=>searchCountry(curr) && filterRegion(curr));
    if(isPending) return<Loader />
    return <section className="country-section">
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
        <ul className="grid grid-four-cols">
            {
                filterCountries.map((curr,idx)=>{
                    return <CountryCard country={curr} key={idx}/>
                })
            }
        </ul>
    </section>
}

export default Country