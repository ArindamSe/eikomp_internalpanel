import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { motion } from 'framer-motion';
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AOS from "aos";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `linear-gradient(90deg,#1a237e, #283593, #1a237e,#1f272d,#0a0a0a,   )`,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const customStyles = {
  width: "200px", // Example width
  height: "40px", // Example height
  border: "1px solid white", // Example white border
  color: "white", // Example white text color
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#bbdefb",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Data = [
  {
    Category: "Eik/23w/TEC/7434",
    
    Industry: "asfsdf",
    Date: "sEFesgfs",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/WPC/8439",
    
    Industry: "sgsdgs",
    Date: "sdgdgds",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/BIS/6501",
    
    Industry: "sdgszd",
    Date: "sgsdg",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/TEC/7434",
    
    Industry: "asfsdf",
    Date: "sEFesgfs",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/WPC/8439",
    
    Industry: "sgsdgs",
    Date: "sdgdgds",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/BIS/6501",
    
    Industry: "sdgszd",
    Date: "sgsdg",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/TEC/7666",
        Industry: "szgdz",
    Date: "zsdgzsdg",
    Link: "http://localhost:3000/",
  },
  {
    Category: "Eik/23w/TEC/7687",
       Industry: "zsdg",
    Date: "szdgd",
    Link: "http://localhost:3000/",
  },

];

const Notification= () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 2 }} 
  >
    <Container
    sx={{
        width: "100%",
        marginTop: "10px",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
            width: { xs: "100%", sm: "80%" },
            margin: "auto",
            backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
            WebkitBackgroundClip: 'text', 
            color: 'transparent', 
            marginBottom: 2,
            pt: "12px",
            fontWeight:"bolder"
        }}
      >
        Notification Progress & Reports
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: `linear-gradient(90deg, #1a237e, #283593, #1a237e,#1f272d,#0a0a0a)`,
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginLeft: 3,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=" ApplicationCategory"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
        </Box>
        <Link to ={"/Notification/addNotification"}>
        <Button
          variant="contained"
          size="small"
          sx={{
            
            backgroundColor: "#1a237e",
            color: "white",
            marginTop: 2,
            marginBottom: 2,
            marginRight: 3,
            marginLeft: 2,
            transitions:`transition: opacity 0.7s ease-in-out`,
            '&:hover': {
                transform: 'scale(1.05)', // Increase the scale factor for a larger icon on hover
              },
            "@media (max-width: 600px)": {
              fontSize: "10px",
              fontWeight: "bold",
              height: "40px",
            },
          }}
        >
         Add New Notification
        </Button>
        </Link>
      </Box>
      <Box
        sx={{
          borderBottom: "5px solid white",
          marginTop: "5px",
          paddingBottom: "20px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ border: "2px solid white", boxShadow:`rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
        >
          <Table sx={{ minWidth: 700, }} aria-label="customized table">
            <TableHead sx={{background: `linear-gradient(90deg, #0a0a0a, #1f272d, #1a237e, #283593, #1a237e)`}}>
              <TableRow >
                <StyledTableCell align="left">S.No</StyledTableCell>
               
                <StyledTableCell align="left">
                  Application Category
                </StyledTableCell>
                <StyledTableCell align="center">Industry</StyledTableCell>
                <StyledTableCell align="center">Link</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">{""}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.Category.toLowerCase().includes(search);
              }).map((row, index) => (

                
                <StyledTableRow   key={row.name}>
                
                  <StyledTableCell  align="left" sx={{fontWeight:"bolder" ,color:"#1a237e"}}>{index + 1}</StyledTableCell>
                  <StyledTableCell align="left" sx={{fontWeight:"bolder" ,color:"#1a237e"}}>
                    
                      {row.Category}
                   
                  </StyledTableCell>
               
                  <StyledTableCell align="center" sx={{fontWeight:"bolder",color:"#1a237e"}}>{row.Industry}</StyledTableCell>
                  <StyledTableCell align="center" sx={{fontWeight:"bolder",color:"#1a237e"}}>
                    {row.Link}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                   
                    sx={{fontWeight:"bolder",color:"#1a237e"}}
                  >
                    {row.Date}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#1a237e",
            color: "white",
            
            
            marginRight: 3,
            marginLeft: 2,
            transitions:`transition: opacity 0.7s ease-in-out`,
            '&:hover': {
                transform: 'scale(1.05)', // Increase the scale factor for a larger icon on hover
              },
            "@media (max-width: 600px)": {
              fontSize: "10px",
              fontWeight: "bold",
              height: "40px",
            },
          }}
        >
  edit
        </Button>
                </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container></motion.div>
  );
};

export default Notification;