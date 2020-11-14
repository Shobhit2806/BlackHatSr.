
import React from 'react';
import Nee from './nee';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.jpg";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {Container,Grid} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor : theme.palette.grey[200],
    paddingTop: theme.spacing(9)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Dum() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.root}>
    <Grid container spacing={4}>
    <Grid item sm={4}>
    <Card>
      
      <CardMedia
      component="img"
      alt="Beginner"
      height="350"
      image={img1}
      title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <h3> Beginner </h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      <Button size="small" color="primary">
      <Router>
      <Link to="/visit">Visit</Link>
      <Switch> 
              
              <Route exact path='/visit' component={Nee}></Route> 
            </Switch> 
      </Router>
      
    </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            This is the section for some basic practice problems which are ordered topic-wise
            so that the new students can have a clear cut view over the foremost topics. 
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    <Grid item sm={4}>
    <Card>
      
      <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="350"
      image={img2}
      title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <h3> Intermediate </h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      <Button size="small" color="primary">
      <Router>
      <Link to="/visit">Visit</Link>
      <Switch> 
              
              <Route exact path='/visit' component={Nee}></Route> 
            </Switch> 
      </Router>
      
    </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            This is the section for some basic practice problems which are ordered topic-wise
            so that the new students can have a clear cut view over the foremost topics. 
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    <Grid item sm={4}>
    <Card>
      
      <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="350"
      image={img3}
      title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <h3> Advanced </h3>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      <Button size="small" color="primary">
      <Router>
      <Link to="/visit">Visit</Link>
      <Switch> 
              
              <Route exact path='/visit' component={Nee}></Route> 
            </Switch> 
      </Router>
      
    </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            This is the section for some basic practice problems which are ordered topic-wise
            so that the new students can have a clear cut view over the foremost topics. 
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
    </Container>
  );
}