import { Cities } from "../Cities"
import { Countries } from "../Countries"
import Select from "react-select"

export function Destinations() {
    const { countries } = Countries()
    const { cities } = Cities()

    const CountrieOptions = countries.map((country) => ({
        value: country.code,
        label: country.name_ptbr,

    }))
    const CitiesOptions = cities.map((city) => ({
        value: city.id,
        label: city.name_ptbr
    }))

    return(
        <>
            <Select
                placeholder="Escolha os países..."
                isMulti
                name="counties"
                options={CountrieOptions}
                className="basic-multi-select"
                classNamePrefix="select"
            />
            <Select
                placeholder="Escolha as cidades..."
                isMulti
                name="cities"
                options={CitiesOptions}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    )
}