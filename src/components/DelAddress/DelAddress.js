import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { RoomOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./DelAddress.scss" ; 

const DelAddress = () => {
  return (
    <div className="DelAddress">
      <div className="heading-contact">
        <LocalPhoneOutlinedIcon sx={{fontSize : "35px"
        }}/>
        <h1>Contact Details</h1>
      </div>

      <div className="contact-details">
        <Box component="form" className="box">
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField
            id="standard-basic"
            variant="standard"
             label="Phone Number" 
             
          />
          <div className="address">
            <div className="address-heading">
              <RoomOutlined />
              <h3>Address</h3>
            </div>
            <TextField
              id="standard-basic"
              label="House no. / Building Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Road Name /Area/Colony"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Pin Code"
              variant="standard"
            />
            <TextField id="standard-basic" label="City" variant="standard" />
          </div>
        </Box>
      </div>

      <Link to= "/payment" className="link">
        <Button className="info"  size="medium" variant="contained"  style={{backgroundColor : "#113f3a" }}  >Continue</Button>
        </Link>
    </div>
  );
};

export default DelAddress;
