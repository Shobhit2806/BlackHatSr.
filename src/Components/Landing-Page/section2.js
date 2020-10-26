import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section2img from "../../assets/images/section2.png";
// import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './section2.css'
export default function Section2() {
    return (
        <div className="section2-main">
        <Box className="mt-9">
          <Grid container spacing={2}>
           
            <Grid item sm={12} md={6} lg={6} data-aos="fade-bottom">
              <Box mt={12}>
                {/* <img
                  className="first-image"
                  src={dscjiit}
                  alt="dscjiitlogo"
                ></img> */}
                <Box mt={2}>
                  <Container>
                    <Typography component="p" variant="body1" align="left">
                     <span className="whatwedo" data-aos="zoom-in-up">What We Do?</span>
                     <br/>
                     <span className="whatwedotag">We have a list of Highly Rated Questions for you to do <span className="whatwedotag">for rocking your upcoming interview</span></span>
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <img
                width="60%"
                data-aos="zoom-in-left"
                className="first-image"
                src={section2img}
                alt="searching"
              ></img>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
}
