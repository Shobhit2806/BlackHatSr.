import React from 'react'
import Graphs from "../../assets/images/graphs.gif";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import './graph.css'
import Appbar from '../common/Navbar'
import Footer from '../Landing-Page/Footer'


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(Topics, Action) {
    return { Topics,Action };
  }
  
  const rows = [
    createData('BFS', <a href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"><button className="btt3">Visit</button></a>),
    createData('DFS', <a href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"><button className="btt3">Visit</button></a>),
    createData('Minimum Spanning Tree', <a href="https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"><button className="btt3">Visit</button></a>),
    createData('Topological Sort', <a href="https://www.geeksforgeeks.org/topological-sorting/"><button className="btt3">Visit</button></a>),
    createData('Connectivity', <a href="https://www.geeksforgeeks.org/find-if-there-is-a-path-between-two-vertices-in-a-given-graph/"><button className="btt3">Visit</button></a> ),
    createData('Shortest Path',<a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"><button className="btt3">Visit</button></a>),
    
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });




export default function Graph(){
    const classes = useStyles();
    return(
       <div className="Graphh">
       <div><Appbar /></div>
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
                    <span className="cn1" data-aos="zoom-in-up">Graphs</span>
                    <br/>
                    <span className="cnn1">One of the most important non-linear Data Sturctures <br/><span className="cnn1">for Interviews and Competitive Programming</span> </span>
                   </Typography>
                 </Container>
               </Box>
             </Box>
           </Grid>
           <Grid item sm={12} md={6} lg={6}>
             <img
               width="60%"
               data-aos="zoom-in-left"
               className="gr"
               src={Graphs}
               alt="searching"
             ></img>
           </Grid>
         </Grid>
       </Box>
       <br/><br/>
     </div>
     <div className="bar">
     <b>&nbsp;&nbsp;Important Topics</b>
     </div><br/>
       <div className="tblc2">
       <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Topics</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Topics}>
              <StyledTableCell component="th" scope="row">
                {row.Topics}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </div>
       <div><Footer /></div>
       </div>
    );
    
    }
    