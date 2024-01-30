import { Box, TextField,Button, Typography,MenuItem} from '@mui/material'
import React,{useState} from 'react'
import { motion } from 'framer-motion';
import Buttons from '../Acesories/Button/Buttons';
function EditUser() {

   
      
   
  return (
    <>
    
    <Box display={"flex"}
     alignItems={"center"} 
     justifyContent={"center"} 
     flexDirection={"column"}
     sx={{
     width:"100%",
     height:"auto",
   backgroundColor:"#e1f5fe",
   gap:"10px"
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
    color: 'transparent',
    marginTop:"10px",
}} align='center' >Edit FORM </Typography>
    <Box
  sx={{
    padding: "2rem",
    width: "20rem",
    height: "auto",
    marginTop:"10px",
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
  label="First Name"
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
    marginTop:"10px",
  }}
  variant="filled"
/>
<TextField
label="LastName"
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
  marginTop:"10px",
}}
variant="filled"
/> <TextField
label="Email"
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
  marginTop:"10px",
}}
variant="filled"
/> <TextField
label="Role"
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
  marginTop:"10px",
}}
variant="filled"
/>

<TextField
label="Mobile Number"
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
  marginTop:"10px",
}}
variant="filled"
/>
  
<TextField
label="Address"
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
  marginTop:"10px",
}}
variant="filled"
/>
 
  
      <Buttons buttonName={"save"} />
  
    
           
       </Box></motion.div>
    </Box>
    </>
  )
}

export default EditUser