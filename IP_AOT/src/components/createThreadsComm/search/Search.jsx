import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './style.css'

const Search = ({handleSelectedCommunities, defaultComm}) => {
    const [selectedCommunties, setSelectedCommunities] = useState(defaultComm);
    useEffect(() => {
        // console.log('se reia useEffectul');
        // console.log(selectedCommunties);
        handleSelectedCommunities(selectedCommunties);

      }, [selectedCommunties]);

    return (
            <div className="w-full">
                <Autocomplete
                multiple
                id="tags-standard"
                options={communities}
                getOptionLabel={(option) => option.title}
                disableCloseOnSelect
                classes={{ listbox: 'custom-listbox', tag: 'custom-tag' }}
                defaultValue={defaultComm ? defaultComm : []}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                noOptionsText={"No community matches your description.."}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label=""
                        placeholder="Search here.."
                        
                        sx={{
                            "& fieldset": { border: 'none' },
                            input: { color: 'white' } 
                        }} 
                        
                    />
                )}
                slotProps={{
                    paper: {
                      sx: {
                        '& .MuiAutocomplete-listbox': {
                            '& .MuiAutocomplete-option': {
                                backgroundColor: '#222233',
                                '&[aria-selected="true"]': {
                                    backgroundColor: '#2b2b3e',
                                    '&:hover':{
                                        backgroundColor: 'darkgrey',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'darkgrey',
                                    },
                                },
                                '&.Mui-focused': {
                                    backgroundColor: '#222233',
                                },
                                '&:hover':{
                                    backgroundColor: 'darkgrey',
                                },
                                
                            },
                            
                        },
                        '& .MuiAutocomplete-noOptions': {
                            color:'white',
                            backgroundColor: '#222233', 
                        },
                    }}
                }}
            
                onChange={(event, value) => {
                    setSelectedCommunities(value);
                }}          
            />
            </div>
            )
    }

    const communities = [
    { title: 'Introducere in programare' },
    { title: 'Programare avansata' },
    { title: 'Structuri de date' },
    { title: 'Pareri optionale' },
    { title: 'Sfaturi de la colegi mai mari' },
    { title: 'ASII' },
    { title: 'Intrebari de programare' },
    ];

    export default Search;