import { useCities } from "../../hooks/useCities"
import Select from "react-select"

export const SelectCities = ({ valuesCity, value }) => {
    const { cities } = useCities()

    const CitiesOptions = cities.map((city) => ({
        value: city.id,
        label: city.name_ptbr,
    }))

    return (
        <Select
            placeholder="Escolha as cidades..."
            isMulti
            name="cities"
            value={value}
            options={CitiesOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(newValue) => valuesCity(newValue)}
        />
    )
}
