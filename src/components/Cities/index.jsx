import { useEffect, useState } from "react";

export function Cities() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch("https://amazon-api.sellead.com/city")
            .then((response) => response.json())
            .then((data) => setCities(data))
    }, [])
    return {
        cities
    }
}
// import { useEffect, useState } from 'react'
// import './styles.css'

// export function Countries() {
//     const [countries, setCountries] = useState([])

//     useEffect(() => {
//         fetch("https://amazon-api.sellead.com/country")
//             .then((response) => response.json())
//             .then((data) => setCountries(data))
//     },[])

//     return {
//         countries
//     }
// }