import { Container,Box,TextField ,Input,InputLabel ,MenuItem,Grid,Button, Typography} from '@mui/material'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import Buttons from '../Acesories/Button/Buttons';


const WhiteBorderTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
}));


const WhiteColorDatePicker = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: 'white', // Set text color
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    width:"5rem" // Set label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Set border color
    },
    '&:hover fieldset': {
      borderColor: 'white', // Set border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Set border color when focused
    },
  },
}));


function AddNotification() {
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
      const [selectedFile, setSelectedFile] = useState(null);

      const handleFileChange = (event) => {
      
        setSelectedFile(event.target.files[0]);
      };
  return (
    <>
    <Box sx={{height:"40rem",backgroundColor:"#e1f5fe"}}>
    <Typography sx={{fontSize:"30px",fontWeight:"bolder",fontFamily: 'Georgia, "Times New Roman", Times, serif',  backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
    WebkitBackgroundClip: 'text', 
    color: 'transparent', }} align='center' >
    All Detail Is Neccesary To Fill 
     </Typography>
    <Container sx={{ marginBottom:"4rem" ,backgroundColor:"#01579b",marginTop:"2rem", borderRadius:"5rem",paddingBottom:"1rem"}}>
    <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: 100, scale: 0.8 }}
    transition={{ duration: 1 }}
  >
  
    
    <Box padding="16px" >
    
    <Grid container spacing={2} sx={{paddingBottom:"1rem"}}>
   
    
      <Grid align="right" item xs={12} sm={12} md={12}>
      <Buttons buttonName={"Add Notification"} />
  
      </Grid>
      <Grid item xs={12} sm={12} md={12} >
      <WhiteBorderTextField 
      id="outlined-basic" 
      label="Category" 
      variant="outlined" 
      backgroundColor="white"
      fullWidth 
      InputLabelProps={{
        sx: {
          fontWeight: 'bold',
          color: 'white',
          '&.Mui-focused': {
            color: 'white', 
            borderColor: 'white', // Set the border color when focused
          },
        },
      }}
      sx={{
        fontWeight: 'bold',
        borderColor: "white", // Set the border color
      }}
    />
    
    
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <WhiteBorderTextField id="outlined-basic" label="Country" variant="outlined" fullWidth    
        InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
              borderColor: 'brown', // Set the border color when focused
            },
          },
        }}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <WhiteBorderTextField
          id="outlined-select-currency"
          select
          label="Select Industries"
          defaultValue=""
          
          fullWidth     InputLabelProps={{
            sx: {
              fontWeight: 'bold',
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
                borderColor:"2px solid brown"
                 // Set the color when focused
              },
            },
          }}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value} style={{
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
        </WhiteBorderTextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <WhiteBorderTextField
          id="outlined-select-currency"
          select
          label="Select Compliance"
          defaultValue=""
        
          fullWidth     InputLabelProps={{
            sx: {
              fontWeight: 'bold',
              color: 'brown',
              '&.Mui-focused': {
                color: 'brown', 
                borderColor:"brown"
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
        </WhiteBorderTextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <WhiteBorderTextField id="outlined-basic" label="Title" variant="outlined" fullWidth  
        InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'brown',
            '&.Mui-focused': {
              color: 'white',
              color: 'white',// Set the border color when focused
            },
          },
        }}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <WhiteBorderTextField
        id="outlined-select-currency"
        select
        label="Select Product"
        defaultValue=""
      
        fullWidth       InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
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
      </WhiteBorderTextField>
    </Grid>
      
      <Grid item xs={12} sm={4} md={6}>
      <WhiteBorderTextField
        id="outlined-select-currency"
        select
        label="Select Waste Type"
        defaultValue=""
       
        fullWidth
        InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
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
      </WhiteBorderTextField>
    </Grid>
   

     

      <Grid item xs={12} md={6}>
        <WhiteBorderTextField id="outlined-basic" label="Status" variant="outlined" fullWidth    InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
              borderColor: 'brown', // Set the border color when focused
            },
          },
        }}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <WhiteBorderTextField
          id="outlined-multiline-flexible"
          label="Content"
          multiline
          minRows={3}
          fullWidth     
          InputLabelProps={{
            sx: {
              fontWeight: 'bold',
              color: 'white',
              '&.Mui-focused': {
                color: 'white',
                borderColor: 'brown', // Set the border color when focused
              },
            },
          }}
          sx= {{
            fontWeight: 'bold',
            color: '#3e2723',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
      <WhiteBorderTextField
        id="outlined-multiline-flexible"
        label="Brief"
        multiline
     
        minRows={3}
        fullWidth   
        InputLabelProps={{
          sx: {
            fontWeight: 'bold',
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
              borderColor: 'brown', // Set the border color when focused
            },
          },
        }}
      />
    </Grid>

  
   <Grid item xs={12} sm={6} md={4}>
      <Box>
  <InputLabel htmlFor="file-input" sx={{ fontWeight: 'bold', color: 'brown' }}>
    Choose File
  </InputLabel>
  <Input
    id="file-input"
    type="file"
    
    onChange={handleFileChange}
    value={selectedFile ? selectedFile.name : ''}
    InputLabelProps={{
      sx: {
        fontWeight: 'bold',
        color: 'brown',
      },
    }}
    sx={{
      backgroundImage: `linear-gradient(90deg,#ff8a65 30%, #ffab91 90%)`,
      color: 'brown',
      padding:"10px", 
      borderRadius:"10px"// Set the text color to white
    }}
  />
  {selectedFile && (
    <p>
      Selected File: {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
    </p>
  )}
</Box>

    </Grid>
      <Grid item xs={6} md={5} sx={{marginTop: 2,}}>
        <LocalizationProvider 
        dateAdapter={AdapterDayjs}>
        <WhiteColorDatePicker />
        </LocalizationProvider>
      </Grid>
   
      
    </Grid>
  </Box></motion.div>
    </Container>
    </Box>
    </>
  )
}

export default AddNotification



