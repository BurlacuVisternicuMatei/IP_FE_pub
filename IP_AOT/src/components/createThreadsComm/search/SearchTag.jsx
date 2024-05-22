import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Chip } from '@mui/material';
import './style.css'

const SearchTag = ({handleSelectedTags, defaultTags, listOfTags}) => {
    const [selectedTags, setSelectedTags] = useState(defaultTags);
    const tags = listOfTags;

    useEffect(() => {
        // console.log('se reia useEffectul');
        // console.log(selectedTags);

        handleSelectedTags(selectedTags);

      }, [selectedTags]);

    return (
            <div className="w-full">
                <Autocomplete
                multiple
                id="tags-standard"
                options={tags}
                getOptionLabel={(option) => option.title}

                disableCloseOnSelect
                classes={{ listbox: 'custom-listbox', tag: 'custom-tag', popper: 'custom-option' }}
                sx={{
                    '& + .MuiSvgIcon-root .MuiChip-deleteIconColorDefault':{
                        color:'red'
                    }
                    
                }}
                defaultValue={defaultTags ? defaultTags : []}
                
                renderTags={(selectedTags, getTagProps) =>
                    selectedTags.map((option, index) => (
                        <Chip
                            key={index}
                            {...getTagProps({ index })}
                            className="custom-tag"
                            label={option.title}
                            style={{ backgroundColor: option.color }}
                            
                        >
                        </Chip>
                    ))
                }
                isOptionEqualToValue={(option, value) => option.title === value.title}
                noOptionsText={"No tag matches your description.."}
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
                    setSelectedTags(value);
                    
                }}          
            />
            </div>
            )
    }


    export default SearchTag;