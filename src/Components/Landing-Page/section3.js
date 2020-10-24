import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section3img from "../../assets/images/section3.png";
// import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './section3.css'
const Section3 = () => {
  return (
    <div className="section3-main"> 
      <Box className="mt-9">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={6}>
            <img
              width="50%"
              data-aos="fade-top"
              className="first-image"
              src={section3img}
              alt="searching"
            ></img>
          </Grid>
          <Grid item sm={12} md={6} lg={6} data-aos="fade-bottom">
            <Box mt={8}>
              {/* <img
                className="first-image"
                src={dscjiit}
                alt="dscjiitlogo"
              ></img> */}
              <Box mt={2}>
                <Container>
                  <Typography component="p" variant="body1" align="left">
                    Welcome to BlackHatSr.
                    <br/>
                    A one stop solution for all DSA needs!
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

export default Section3;