import React, { useState } from "react";
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
import { TextField, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    backgroundColor: "#d1c4e9",
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
    ProjectCode: "Eik/23w/TEC/7434",
    ComplianceType: "WPC",
    ProductName: "Mobile",
    ModelNo: "15564ER",
    AssociatedNumber: "123432",
    StartDate: "2018",
    EndDate: "2023",
    EstimatedComplianceDate: "2024",
    status: "ongoing",
  },
  {
    ProjectCode: "Eik/23w/WPC/8439",

    ComplianceType: "TEC",
    ProductName: "Iron",
    ModelNo: "dsfgsdg",
    AssociatedNumber: "123432",
    StartDate: "2020",
    EndDate: "2022",
    EstimatedComplianceDate: "2024",
    status: "Completed",
  },
  {
    ProjectCode: "Eik/23w/BIS/6501",
    AssociatedNumber: "123432",
    ComplianceType: "BIS",
    ProductName: "Bluetooth",
    ModelNo: "15564ER",
    AssociatedNumber: "123432",
    StartDate: "2021",
    EndDate: "2021",
    EstimatedComplianceDate: "2022",
    status: "ongoing",
  },
  {
    ProjectCode: "Eik/23w/TEC/7666",
    ComplianceType: "TEC",
    ProductName: "OLT",
    ModelNo: "15564ER",
    AssociatedNumber: "123432",
    StartDate: "2019",
    EndDate: "2023",
    EstimatedComplianceDate: "2025",
    status: "ongoing",
  },
  {
    ProjectCode: "Eik/23w/TEC/7687",
    ComplianceType: "WIC",
    ProductName: "Television",
    ModelNo: "15564ER",
    AssociatedNumber: "123432",
    StartDate: "2023",
    EndDate: "2023",
    EstimatedComplianceDate: "2024",
    status: "ongoing",
  },
];
const currencies = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Ongoing",
    label: "Ongoing",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Inclusion",
    label: "Inclusion",
  },
  {
    value: "Modification",
    label: "Modification",
  },
];

const ApplicationPage = () => {
  const [search, setSearch] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
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

          maxHeight: "100%",
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
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: 2,
            pt: "12px",
            fontWeight: "bolder",
          }}
        >
          Application Progress & Reports
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end", // Align to the right
              alignItems: "center", // Center vertically
              gap: "20px",
              marginRight: 3, // Adjust the gap between buttons
            }}
          >
            <Link to="/Application/NewApplication">
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1a237e",
                  color: "white",
                  transitions: "transition: opacity 0.7s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "10px",
                    fontWeight: "bold",
                    height: "40px",
                  },
                }}
              >
                Start New Application
              </Button>
            </Link>
            <Link to={"/Application/Status"}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1a237e",
                  color: "white",
                  transitions: "transition: opacity 0.7s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "10px",
                    fontWeight: "bold",
                    height: "40px",
                  },
                }}
              >
                Status
              </Button>
            </Link>
            <Link to={"/Application/Upload"}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1a237e",
                  color: "white",
                  transitions: "transition: opacity 0.7s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "10px",
                    fontWeight: "bold",
                    height: "40px",
                  },
                }}
              >
                Upload
              </Button>
            </Link>
          </Box>
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
            sx={{
              border: "2px solid white",
              boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
            }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead
                sx={{
                  background: `linear-gradient(90deg, #0a0a0a, #1f272d, #1a237e, #283593, #1a237e)`,
                }}
              >
                <TableRow>
                  <StyledTableCell align="left">S.No</StyledTableCell>

                  <StyledTableCell align="left">Project Code</StyledTableCell>
                  <StyledTableCell align="center">
                    Compliance Type
                  </StyledTableCell>
                  <StyledTableCell align="center">Product Name</StyledTableCell>
                  <StyledTableCell align="center">Model Number</StyledTableCell>
                  <StyledTableCell align="center">
                    Associated Number/Family Model
                  </StyledTableCell>
                  <StyledTableCell align="center">Start Date</StyledTableCell>
                  <StyledTableCell align="center">
                    Estimated Completion Date
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ActualEnd Date
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Status"
                      defaultValue="All"
                      sx={{}}
                      InputLabelProps={{
                        sx: {
                          color: "white",
                        },
                      }}
                      SelectProps={{
                        MenuProps: {
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        },
                      }}
                      InputProps={{
                        sx: {
                          color: "white", // Text color
                        },
                      }}
                      variant="outlined"
                      outlinedInputProps={{
                        sx: {
                          "&:not(.Mui-disabled):hover::before": {
                            borderColor: "white", // Outline color on hover
                          },
                          "&.Mui-focused::before": {
                            borderColor: "white", // Outline color when focused
                          },
                        },
                      }}
                    >
                      {currencies.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            background: `linear-gradient(180deg, #64b5f6, #2196f3, #1976d2, #0d47a1)`,
                            color: "white",
                            borderRadius: "10px",
                            borderBottom: "1px solid #ccc",
                            margin: "10px",
                            paddingBottom: "10px",
                            transition: "backgroundColor 0.1s ease",
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </StyledTableCell>
                  <StyledTableCell align="center">{""}</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.ProjectCode.toLowerCase().includes(search);
                }).map((row, index) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      align="left"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.ProjectCode}
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.ComplianceType}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.ProductName}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        fontWeight: "bolder",
                        color: "#1a237e",
                        overflowX: "auto",
                        maxWidth: "150px",
                      }}
                    >
                      {row.ModelNo}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.AssociatedNumber}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.StartDate}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.EstimatedComplianceDate}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.EndDate}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{ fontWeight: "bolder", color: "#1a237e" }}
                    >
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          backgroundColor: "#1a237e",
                          color: "white",

                          transitions: `transition: opacity 0.7s ease-in-out`,
                          "&:hover": {
                            transform: "scale(1.05)", // Increase the scale factor for a larger icon on hover
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
                      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "#1a237e",
          color: "white",
          
          
          marginTop: 3,
          marginBottom: 2,
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
upload
      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </motion.div>
  );
};

export default ApplicationPage;
