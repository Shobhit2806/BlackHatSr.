import React from 'react'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import section4img from "../../assets/images/section4.png";
// import dscjiit from "../../images/dscjiit.png";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import './section4.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




const useStyles = makeStyles({
  root: {
    maxWidth: 125,
    maxHeight:100

    
  },

  title: {
    fontSize: 15,
  },
});
export default function Section4() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className="section4-main">
        <Box className="mt-9">
          <Grid container spacing={2}>
           
            <Grid item sm={12} md={6} lg={6} data-aos="fade-bottom">
              <Box mt={8}>
                {/* <img
                  className="first-image"
                  src={dscjiit}
                  alt="dscjiitlogo"
                ></img> */}
                <Box mt={12}>
                  <Container>
                    <Typography component="p" variant="body1" align="left">
                    <span className="whyus" data-aos="zoom-in-up">Why Us?</span>
                    </Typography>
                    <div className="whyustag">
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="black" gutterBottom>
                        Just do curated Questions
                      </Typography>
                     
        
                    </CardContent>
      
                  </Card>
                  </div>
                  
   
                  </Container>
                </Box>  
              </Box>
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <img
                width="60%"
                data-aos="fade-up-left"
                className="first-image"
                src={section4img}
                alt="searching"
              ></img>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
}
