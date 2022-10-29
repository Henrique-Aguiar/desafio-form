import { useCountries } from "../../hooks/useCountries"
import Select from "react-select"

export function SelectCounties() {
    const { countries } = useCountries()

    const CountrieOptions = countries.map((country) => ({
        value: country.code,
        label: country.name_ptbr,
    }))

    return (
        <Select
            placeholder="Escolha os países..."
            isMulti
            name="counties"
            options={CountrieOptions}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    )
}