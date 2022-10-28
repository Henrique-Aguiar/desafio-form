import { useEffect, useState } from 'react'
import './styles.css'

export function Countries() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://amazon-api.sellead.com/country")
            .then((response) => response.json())
            .then((data) => setCountries(data))
    },[])

    return {
        countries
    }
}