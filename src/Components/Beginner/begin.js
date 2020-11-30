import React from 'react'
import Appbar from '../common/Navbar'
import Footer from '../Landing-Page/Footer'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './begin.css'
import Temp from './temp'
import AppbarLogout from '../common/NavbarLogout'



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
  
  function createData(Problem, Action) {
    return { Problem,Action };
  }
  
  const rows = [
    createData('Arrays', <a target="_blank" href="https://codeforces.com/problemset/problem/572/A"><button className="bt3">Solve</button></a>),
    createData('Array', <a target="_blank" href="https://codeforces.com/problemset/problem/300/A"><button className="bt3">Solve</button></a>),
    createData('Reorder The Array', <a href="https://codeforces.com/problemset/problem/1007/A" target="_blank"><button className="bt3">Solve</button></a>),
    createData('Ksusha and Array', <a target="_blank" href="https://codeforces.com/problemset/problem/299/A"><button className="bt3">Solve</button></a>),
    createData('Array', <a target="_blank" href="https://codeforces.com/problemset/problem/224/B"><button className="bt3">Solve</button></a> ),
    createData('Nastya and an Array',<a target="_blank" href="https://codeforces.com/problemset/problem/992/A"><button className="bt3">Solve</button></a>),
    createData('Sort the Array',<a target="_blank" href="https://codeforces.com/problemset/problem/451/B"><button className="bt3">Solve</button></a>),
    
  ];
  const rows2 = [
    createData('Lecture',<a target="_blank" href="https://codeforces.com/problemset/problem/499/B"><button className="bt3">Solve</button></a>),
    createData('Cards',<a target="_blank" href="https://codeforces.com/problemset/problem/1220/A"><button className="bt3">Solve</button></a>),
    createData('Subsequence Hate',<a target="_blank" href="https://codeforces.com/problemset/problem/1363/B"><button className="bt3">Solve</button></a>),
    createData('Longest Palindrome', <a target="_blank" href="https://codeforces.com/problemset/problem/1304/B"><button className="bt3">Solve</button></a>),
    createData('Common Prefixes',<a target="_blank" href="https://codeforces.com/problemset/problem/1384/A"><button className="bt3">Solve</button></a>),
    createData('Different Is Good',<a target="_blank" href="https://codeforces.com/problemset/problem/672/B"><button className="bt3">Solve</button></a>),
    createData('Dominated Subarray',<a target="_blank" href="https://codeforces.com/problemset/problem/1257/C"><button className="bt3">Solve</button></a>),
    createData('Equalize',<a target="_blank" href="https://codeforces.com/problemset/problem/1037/C"><button className="bt3">Solve</button></a>),
    createData('Letters Rearranging', <a target="_blank" href="https://codeforces.com/problemset/problem/1093/B"><button className="bt3">Solve</button></a>),
    createData('Keyboard Layouts',<a target="_blank" href="https://codeforces.com/problemset/problem/831/B"><button className="bt3">Solve</button></a>),
  ];
  const rows3 = [
    createData('Reverse A Substing',<a target="_blank" href="https://codeforces.com/problemset/problem/1155/A"><button className="bt3">Solve</button></a>),
    createData('Passwords',<a target="_blank" href="https://codeforces.com/problemset/problem/721/B"><button className="bt3">Solve</button></a>),
    createData('Substrings Sort',<a target="_blank" href="https://codeforces.com/problemset/problem/988/B"><button className="bt3">Solve</button></a>),
    createData('Letters Rearranging', <a target="_blank" href="https://codeforces.com/problemset/problem/1093/B"><button className="bt3">Solve</button></a>),
    createData('String Transformation I',<a target="_blank" href="https://codeforces.com/problemset/problem/1383/A"><button className="bt3">Solve</button></a>),
    createData('PolandBall and Game',<a target="_blank" href="https://codeforces.com/problemset/problem/755/B"><button className="bt3">Solve</button></a>),
    createData('Sinking Ship',<a target="_blank" href="https://codeforces.com/problemset/problem/63/A"><button className="bt3">Solve</button></a>),
    createData('Longest Regular Bracket Sequence',<a target="_blank" href="https://codeforces.com/problemset/problem/5/C"><button className="bt3">Solve</button></a>),
    createData('Felicity Is Coming!', <a target="_blank" href="https://codeforces.com/problemset/problem/757/C"><button className="bt3">Solve</button></a>),
    createData('Equivalent Strings',<a target="_blank" href="https://codeforces.com/problemset/problem/559/B"><button className="bt3">Solve</button></a>),
  ];
  const rows4 = [
    createData('Spy-String',<a target="_blank" href="https://codeforces.com/problemset/problem/1360/F"><button className="bt3">Solve</button></a>),
    createData('Winner',<a target="_blank" href="https://codeforces.com/problemset/problem/2/A"><button className="bt3">Solve</button></a>),
    createData('Registration System',<a target="_blank" href="https://codeforces.com/problemset/problem/4/C"><button className="bt3">Solve</button></a>),
    createData('Kings Path',<a target="_blank" href="https://codeforces.com/problemset/problem/242/C"><button className="bt3">Solve</button></a>),
    createData('Watto And Mechanism',<a target="_blank" href="https://codeforces.com/problemset/problem/514/C"><button className="bt3">Solve</button></a>),
    createData('Gargari And Bishops',<a target="_blank" href="https://codeforces.com/problemset/problem/463/C"><button className="bt3">Solve</button></a>),
    createData('Zero Quantity Maximization',<a target="_blank" href="https://codeforces.com/problemset/problem/1133/D"><button className="bt3">Solve</button></a>),
    createData('OR In Matrix',<a target="_blank" href="https://codeforces.com/problemset/problem/486/B"><button className="bt3">Solve</button></a>),
    createData('Vitaliy And Pie',<a target="_blank" href="https://codeforces.com/problemset/problem/525/A"><button className="bt3">Solve</button></a>),
  ];
  const rows5 = [
    createData('XXXXX',<a target="_blank" href="https://codeforces.com/problemset/problem/1364/A"><button className="bt3">Solve</button></a>),
    createData('Bachgold Problem',<a target="_blank" href="https://codeforces.com/problemset/problem/749/A"><button className="bt3">Solve</button></a>),
    createData('LCM Problem',<a target="_blank" href="https://codeforces.com/problemset/problem/1389/A"><button className="bt3">Solve</button></a>),
    createData('Buying Shovels',<a target="_blank" href="https://codeforces.com/problemset/problem/1360/D"><button className="bt3">Solve</button></a>),
    createData('GCD Compression',<a target="_blank" href="https://codeforces.com/problemset/problem/1370/B"><button className="bt3">Solve</button></a>),
    createData('Mahmoud and a Triangle',<a target="_blank" href="https://codeforces.com/problemset/problem/766/B"><button className="bt3">Solve</button></a>),
    createData('Perfect Number',<a target="_blank" href="https://codeforces.com/problemset/problem/919/B"><button className="bt3">Solve</button></a>),
    createData('Mere Array',<a target="_blank" href="https://codeforces.com/problemset/problem/1401/C"><button className="bt3">Solve</button></a>),
    createData('Composite Coloring',<a target="_blank" href="https://codeforces.com/problemset/problem/1332/B"><button className="bt3">Solve</button></a>),
  ];
  const rows6 = [
    createData('Kefa And Park',<a target="_blank" href="https://codeforces.com/problemset/problem/580/C"><button className="bt3">Solve</button></a>),
    createData('Party',<a target="_blank" href="https://codeforces.com/problemset/problem/115/A"><button className="bt3">Solve</button></a>),
    createData('K-Tree',<a target="_blank" href="https://codeforces.com/problemset/problem/431/C"><button className="bt3">Solve</button></a>),
    createData('Linova And Kingdom',<a target="_blank" href="https://codeforces.com/problemset/problem/1336/A"><button className="bt3">Solve</button></a>),
    createData('Reposts',<a target="_blank" href="https://codeforces.com/problemset/problem/522/A"><button className="bt3">Solve</button></a>),
    createData('Christmas Spruce',<a target="_blank" href="https://codeforces.com/problemset/problem/913/B"><button className="bt3">Solve</button></a>),
    createData('Mahmoud And Ehab And The Bipartiteness',<a target="_blank" href="https://codeforces.com/problemset/problem/862/B"><button className="bt3">Solve</button></a>),
    createData('XOR-Tree',<a href="https://codeforces.com/problemset/problem/429/A" target="_blank"><button className="bt3">Solve</button></a>),
    
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export default function Beginner() {
  const classes = useStyles();

  return (
      <div className="tblc">
      <div className="apbr"><AppbarLogout /></div><br/> 
      <div>
      <Temp />
      </div>
      <div className="Array">&nbsp;&nbsp;&nbsp;
      <b>1. Array </b>
      </div><br/>
      <div className="tblc2">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div><div className="String">&nbsp;&nbsp;&nbsp;
    <b>2. String </b>
    </div><br/>
    <div className="tblc3">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div><div className="Sorting">&nbsp;&nbsp;&nbsp;
    <b>3. Sorting </b>
    </div><br/>
    <div className="tblc4">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div><div className="Hashing">&nbsp;&nbsp;&nbsp;
    <b>4. Hashing </b>
    </div><br/>
    <div className="tblc5">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows4.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div><div className="numth">&nbsp;&nbsp;&nbsp;
    <b>5. Number Theory </b>
    </div><br/>
    <div className="tblc6">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows5.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div><div className="trees">&nbsp;&nbsp;&nbsp;
    <b>6. Trees </b>
    </div><br/>
    <div className="tblc7">
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>Problems</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows6.map((row) => (
            <StyledTableRow key={row.Problem}>
              <StyledTableCell component="th" scope="row">
                {row.Problem}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Action}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Footer />
    </div>
  );
}