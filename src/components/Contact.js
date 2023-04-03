import React, {Fragment} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <>
    <h2 style={{color: 'black'}}>Let's Start Co-Innovating!</h2>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="Please enter your Email Address"
          placeholder='Email Address'
        />
       
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="Enter Your Name"
          placeholder='Enter Your Name'
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          helperText="Enter Message"
          placeholder='Enter Message'
        />
        
        </div>
         <Button variant="contained" size="medium">
          Submit
        </Button>
    </Box>
    </>
  )
}

export default Contact