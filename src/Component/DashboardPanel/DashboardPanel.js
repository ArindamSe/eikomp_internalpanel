import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function DashboardPanel() {
    const complianceproduct=["Notification", "Compliance", "Application","Products"]
  return (
<>
<Box>
<Box
  sx={{
    backgroundImage: 'url("https://www.imop.co.in/assets/img/About/compliance.jpeg")',
    backgroundSize: 'cover', // This will make sure the image covers the entire box
    width: '100%', // Full width
    height: '20rem', // Set the height to 50rem
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"3rem",
    borderBottomRightRadius:"10rem",
    borderBottomLeftRadius:"10rem",
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
  }}
> <Typography sx={{fontWeight:"bolder",fontSize:"40px", color:"white",fontFamily: 'Georgia, "Times New Roman", Times, serif'}}>Welcome to compliance Services</Typography></Box>   <Box className="dashboardContainer" 
sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "top",
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