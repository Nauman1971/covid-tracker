import React, { useState, useEffect } from "react";
import {Select, FormControl, NativeSelect} from "@material-ui/core";
import { countriesData } from "./endpoints";
import axios from "axios";

const CountrySelect = ({handleCity}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(countriesData);
            setCountries(response.data.countries)
        }
        fetchApi();
    }, [])


    return (
            <FormControl className="country-selector">
                <NativeSelect onChange={(evt) => handleCity(evt.target.value)}
                onBlur={(evt) => handleCity(evt.target.value)}
                >
                    <option value="">Global</option>
                    {countries.map(((country, i) => (
                        <option key={i} value={country.name}>{country.name}</option>  
                    )))}
                </NativeSelect>
            </FormControl>
    )
}

export default CountrySelect