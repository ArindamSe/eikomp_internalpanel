import React from 'react'
import  {Button}  from '@mui/material'
function Buttons(props) {
  const {buttonName}=props
  return (
    <>
    <Button
    variant="contained"
    size="small"
    sx={{
      
      backgroundImage: `linear-gradient(90deg,#ff8a65 30%, #ffab91 90%)`,
      color: "brown",
      fontWeight:"bolder",
        marginLeft:25, marginTop:3,
     
      transitions:`transition: opacity 0.7s ease-in-out`,
      '&:hover': {
          transform: 'scale(1.05)', 
        },
      "@media (max-width: 600px)": {
        fontSize: "10px",
        fontWeight: "bold",
        height: "40px",
      },
    }}
  >
   {buttonName}
  </Button>
    </>
  )
}

export default Buttons