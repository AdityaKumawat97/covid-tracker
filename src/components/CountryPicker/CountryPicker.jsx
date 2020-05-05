import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchcountries } from '../../api'
const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchcountries())
        }
        fetchAPI()
    }, [setFetchedCountries])

    return (

        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="global" >Global</option>
                {fetchedCountries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
