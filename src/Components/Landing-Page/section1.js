import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section1 from "../../assets/images/section1.gif";
// import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './section1.css'
const Section1 = () => {
  return (
    <div className="section1-main"> 
      <Box className="mt-9">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={6}>
            <img
              width="60%"
              data-aos="fade-top"
              className="first-image"
              src={section1}
              alt="searching"
            ></img>
          </Grid>
          <Grid item sm={12} md={6} lg={6} data-aos="fade-bottom">
            <Box mt={18}>
              {/* <img
                className="first-image"
                src={dscjiit}
                alt="dscjiitlogo"
              ></img> */}
              <Box mt={2}>
                <Container>
                  <Typography component="p" variant="body1" align="left">
                    <span className="welcometext">Welcome to</span> <span className="Title1text">BlackHatSr.</span>
                    <br/>
                    <span className="welcometagline">
                    A one stop solution for all DSA needs!
                    </span>
                  </Typography>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Section1;