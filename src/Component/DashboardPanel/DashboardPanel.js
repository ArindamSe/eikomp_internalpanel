import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'


function DashboardPanel() {
    
  
  const complianceproduct=["Notification", "Compliance", "Application","Products"]
 

 

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
 
  return (
<>
<Box>
<Box
  sx={{
    backgroundImage: 'url("https://www.cloud4c.com/sites/default/files/inline-images/compliance-consulting-45.jpg")',
    backgroundSize: 'cover', // This will make sure the image covers the entire box
    width: '100%', // Full width
    height: '18.9rem', // Set the height to 50rem
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"3rem",
    borderBottomRightRadius:"10rem",
    borderBottomLeftRadius:"10rem",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    '@media (max-width: 740px)': {
      // Apply styles for screens with a maximum width of 600 pixels (adjust as needed)
      borderBottomRightRadius: "5rem",
      borderBottomLeftRadius: "5rem",
    },
  }}
> <Typography sx={{fontWeight:"bolder",fontSize:"40px", color:"#ec407a",fontFamily: 'Georgia, "Times New Roman", Times, serif'}}>
Welcome to  
<Typewriter
            words={[' Compliance Services']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
</Typography></Box>   <Box className="dashboardContainer" 
sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "top",
    paddingBottom:"20px",
    width: "100%",
    gap: 1,
  }}> 

  {complianceproduct.map((item)=>{
    return (
        <Link
        to={`/${item}`}
        style={{
          textDecoration: 'none', 
          color: 'black', 
        
        }}
      >
    
        <Box className="dashbordBox">
        <Typography className="dashbordTypography" sx={{fontSize:"30px",fontFamily: 'Georgia, "Times New Roman", Times, serif'}} >{item}</Typography>
        </Box>
   
        </Link>
    )
  })}
 
</Box>
</Box>

</>
  )
}

export default DashboardPanel