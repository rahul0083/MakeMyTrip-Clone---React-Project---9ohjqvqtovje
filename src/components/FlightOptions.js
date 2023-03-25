import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function CitiesList({label,type,defaultValue}) {


  return (
    
      <TextField 
        id="date"
        label={label}
        type={type}
        defaultValue={defaultValue}
        InputLabelProps={{
        shrink: true,
        }}
      />
  
  )
}
