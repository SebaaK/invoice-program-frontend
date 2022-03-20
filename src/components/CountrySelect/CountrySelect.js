import {Autocomplete, Box, TextField} from "@mui/material";
import {useSelector} from "react-redux";
import {getCountriesList} from "../../redux/store";

const CountrySelect = props => {

    const countries = useSelector(getCountriesList);

    return (
        <Autocomplete
            id="country"
            name="country"
            onChange={(event, value) => {
                props.setFieldValue(
                    "country", value !== null ? value.label : ''
                );
            }}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300}}
            autoHighlight
            options={countries}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code}) + {option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    name="country"
                    label="Kraj"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

export default CountrySelect;