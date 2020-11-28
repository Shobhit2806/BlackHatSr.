import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section2img from "../../assets/images/blch.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './temp.css'
export default function Temp() {
    return (
        <div className="section2-main">
        <Box className="mt-9">
          <Grid container spacing={2}>
           
            <Grid item sm={12} md={6}  data-aos="fade-bottom">
              <Box mt={12}>
                {/* <img
                  className="first-image"
                  src={dscjiit}
                  alt="dscjiitlogo"
                ></img> */}
                <Box mt={2}>
                  <Container>
                    <Typography component="p" variant="body1" align="left">
                     <span className="cn1" data-aos="zoom-in-up">Advanced !</span>
                     <br/>
                     <span className="cnn1">Welcome to the Advanced section where you will be able <br/><span className="cnn1">find topic wise important problems related to DSA</span> </span>
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
        <br/><br/>
      </div>
    )
}
