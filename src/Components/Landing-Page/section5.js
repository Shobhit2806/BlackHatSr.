import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section5img from "../../assets/images/section5.png";
// import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './section5.css'


export default function Section5() {
    return (
        <div className="section5-main"> 
      <Box className="mt-9">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={6}>
            <img
              width="50%"
              data-aos="fade-top"
              className="first-image"
              src={section5img}
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
                    Contact Us!
                    <br/>
                    
                  </Typography>
                </Container>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
    )
}
