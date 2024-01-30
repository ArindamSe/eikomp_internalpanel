import { Box, TextField,Button, Typography,MenuItem} from '@mui/material'
import React,{useState} from 'react'
import { motion } from 'framer-motion';
import Buttons from '../Acesories/Button/Buttons';

function NewApplicationForm() {

    const currencies = [
        {
          value: 'USD',
          label: 'addnew',
        },
        {
          value: 'EUR',
          label: 'addnew',
        },
        {
          value: 'BTC',
          label: 'addnew',
        },
        {
          value: 'JPY',
          label: 'addnew',
        },
        
      ];
   
  return (
    <>
    
    <Box display={"flex"}
     alignItems={"center"} 
     justifyContent={"center"} 
     flexDirection={"column"}
     sx={{
     width:"100%",
     height:"88vh",
   backgroundColor:"#e1f5fe"
    }} >
    <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: 100, scale: 0.8 }}
    transition={{ duration: 2 }}
  >
    <Typography sx={{
    fontSize:"40px",
    fontWeight:"bolder",
    fontFamily: 'Georgia, "Times New Roman", Times, serif', 
     backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
    WebkitBackgroundClip: 'text', 
    color: 'transparent', }} align='center' >Application FORM </Typography>
    <Box
  sx={{
    padding: "2rem",
    width: "20rem",
    height: "20rem",
 
    borderRadius: "5rem",
    display: "flex",
    boxShadow: "rgba(33, 33, 107, 0.25) 0px 54px 55px, rgba(33, 33, 107, 0.12) 0px -12px 30px, rgba(33, 33, 107, 0.12) 0px 4px 6px, rgba(33, 33, 107, 0.17) 0px 12px 13px, rgba(33, 33, 107, 0.09) 0px -3px 5px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#01579b",
  }}
>

  <TextField
  label="Product Name"
  marginTop='5rem'
  marginBottom='5rem'
  fullWidth 
  InputLabelProps={{
    sx: {
      fontWeight: 'bold',
      color: '#01579b',
      '&.Mui-focused': {
        color: '#01579b', // Set the color when focused
      },
    },
  }}
  sx={{
    borderRadius: "10px",
    fontWeight: 'bold',
    backgroundColor: "white",
  }}
  variant="filled"
/>

<TextField
        id="outlined-select-currency"
        select
        label="User Type"
        defaultValue=""
         sx={{bgcolor:"white" ,borderRadius:"10px" ,marginTop:'1rem',
         marginBottom:'1rem'}}
        fullWidth
        InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: '#01579b',
            '&.Mui-focused': {
              color: 'black', 
              fontWeight:"bolder",
              borderColor: 'brown', // Set the border color when focused
            },
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}
          style={{
            fontSize: '16px',
            fontWeight: '500',
            backgroundImage: `linear-gradient(90deg,#ff8a65 30%, #ffab91 90%)`,
            color: "brown", 
            borderRadius:"10px", 
            borderBottom: '1px solid #ccc', 
            margin: '10px', 
            paddingBottom: '10px', 
            transition: 'backgroundColor 0.1s ease', 
          }}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
  
      <TextField
      label="Product Type"
      marginTop='5rem'
      marginBottom='5rem'
      fullWidth 
      InputLabelProps={{
        sx: {
          fontWeight: 'bold',
          color: '#01579b',
          '&.Mui-focused': {
            color: '#01579b', // Set the color when focused
          },
        },
      }}
      sx={{
        borderRadius: "10px",
        fontWeight: 'bold',
        backgroundColor: "white",
      }}
      variant="filled"
    />

 
  
    <Buttons buttonName={"save"} />
  
    
           
       </Box></motion.div>
    </Box>
    </>
  )
}

export default NewApplicationForm