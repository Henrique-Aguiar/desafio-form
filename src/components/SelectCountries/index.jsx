import { useCountries } from "../../hooks/useCountries"
import Select from "react-select"

export const SelectCounties = ({ valuesCounty, value }) => {
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
            value={value}
            options={CountrieOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(newValue) => valuesCounty(newValue)}
        />
    )
}