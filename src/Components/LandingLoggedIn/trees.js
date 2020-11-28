import React from 'react'
import Graphs from "../../assets/images/trees.gif";
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
    createData('Search & Insertion', <a href="https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/"><button className="btt3">Visit</button></a>),
    createData('Delete', <a href="https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/"><button className="btt3">Visit</button></a>),
    createData('Tree Traversals (Inorder, Preorder and Postorder)', <a href="https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"><button className="btt3">Visit</button></a>),
    createData('Minimum Value Node', <a href="https://www.geeksforgeeks.org/find-the-minimum-element-in-a-binary-search-tree/"><button className="btt3">Visit</button></a>),
    createData('Check if a Tree is BST', <a href="https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/"><button className="btt3">Visit</button></a> ),
    createData('Lowest Common Ancestor',<a href="https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/"><button className="btt3">Visit</button></a>),
    
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });




export default function Trees(){
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
                    <span className="cn1" data-aos="zoom-in-up">Trees</span>
                    <br/>
                    <span className="cnn1">Non-linear Data Sturcture which is a kind of graph<br/><span className="cnn1">asked frequently in Interviews</span> </span>
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
    