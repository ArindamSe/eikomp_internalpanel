import { Box, TextField,InputLabel,Input,Button, Typography} from '@mui/material'
import React,{useState} from 'react'
import { motion } from 'framer-motion';
function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    
      setSelectedFile(event.target.files[0]);
    };
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
    color: 'transparent', }} align='center' >Upload FORM </Typography>
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
  label="File Name"
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


  
   <Input
     id="file-input"
     type="file"
     marginBottom='5rem'
     onChange={handleFileChange}
     value={selectedFile ? selectedFile.name : ''}
     InputLabelProps={{
       sx: {
         fontWeight: 'bold',
         color: '#3e2723',
       },
     }}
     sx={{
        backgroundColor:"white",
       color: '#01579b', 
       padding:"10px",
       marginTop:"2rem",
       fontWeight: 'bold',
       borderRadius:"10px"
     }}
   />
   {selectedFile && (
     <p sx={{bgcolor:"red"}}>
       Selected File: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
     </p>
   )}

 
  
     <Button
            variant="contained"
            size="small"
            marginBottom='5rem'
          align="right"
            sx={{
                backgroundImage: "#ccff90"
                , marginTop:"2rem",
               marginLeft:"14rem",
               fontWeight: 'bold',
              backgroundColor: '#55B700',
              color: '#01579b',
              width:"6rem",
              transitions: 'transition: opacity 0.7s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              '@media (max-width: 600px)': {
                fontSize: '10px',
                fontWeight: 'bold',
                height: '40px',
              },
            }}
          >
            Save
          </Button>
    
           
       </Box></motion.div>
    </Box>
    </>
  )
}

export default UploadForm