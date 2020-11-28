import React,{useState,useEffect} from 'react'
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
import './intermediate.css'
import Temp from './temp'
import axios from 'axios';


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
  
  

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


export default function Intermediate() {
  const classes = useStyles();
  const [level1,setlevel1] = useState(['']);
  const [level1index,setlevel1index] = useState(['']);
  const [level1cid,setlevel1cid] = useState(['']);

  const [level2,setlevel2] = useState(['']);
  const [level2index,setlevel2index] = useState(['']);
  const [level2cid,setlevel2cid] = useState(['']);

  const [level3,setlevel3] = useState(['']);
  const [level3index,setlevel3index] = useState(['']);
  const [level3cid,setlevel3cid] = useState(['']);

  useEffect(async () => {
    
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/questions/api/intermediate/',
            headers: {
                'Content-Type': 'application/json'
                }, 
            data: {
             handle:'rattle_coder'
            }
          }).then(response=>{
              console.log(response.data);
              setlevel1(response.data.finalbgnr.name)
              setlevel1index(response.data.finalbgnr.index)
              setlevel1cid(response.data.finalbgnr.contestId)

              setlevel2(response.data.finalinter.name)
              setlevel2index(response.data.finalinter.index)
              setlevel2cid(response.data.finalinter.contestId)

              setlevel3(response.data.finalhard.name)
              setlevel3index(response.data.finalhard.index)
              setlevel3cid(response.data.finalhard.contestId)
              console.log(level1);
          });
  }, [])
  
  var items = level1.map((level, index) => {
    return {
      name: level,
      category: level1index[index],
      cid: level1cid[index]
    }
  });

  var items2 = level2.map((level, index) => {
    return {
      name: level,
      category: level2index[index],
      cid: level2cid[index]
    }
  });


  var items3 = level3.map((level, index) => {
    return {
      name: level,
      category: level3index[index],
      cid: level3cid[index]
    }
  });

  console.log(items);
  return (
      <div className="tblc">
      <div className="apbr"><Appbar /></div><br/> 
      <div>
      <Temp />
      </div>
     
      {/* {
        level1cid.length?(level1cid).map((level1ci) => <div>{level1ci}</div>):null
        } 
        {
        level1index.length?(level1index).map((level1ind) => <div>{level1ind}</div>):null
        }  */}
    

      <div className="Array">&nbsp;&nbsp;&nbsp;
      <b>1. Level 1 </b>
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

       
          {items.length?(items).map((item) => 
              <div>
                
                <StyledTableRow key={item}>
               <StyledTableCell component="th" scope="row">
                 {item.name}
               </StyledTableCell> 
               <StyledTableCell align="right"><a href={`https://codeforces.com/problemset/problem/${item.cid}/${item.category}`}><button className="bt3">Solve</button></a></StyledTableCell>
               </StyledTableRow>
              </div>
          ):null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="String">&nbsp;&nbsp;&nbsp;
    <b>2. Level 2 </b>
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
        {items2.length?(items2).map((item2) => 
              <div>
                
                <StyledTableRow key={item2}>
               <StyledTableCell component="th" scope="row">
                 {item2.name}
               </StyledTableCell> 
               <StyledTableCell align="right"><a href={`https://codeforces.com/problemset/problem/${item2.cid}/${item2.category}`}><button className="bt3">Solve</button></a></StyledTableCell>
               </StyledTableRow>
              </div>
          ):null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="Sorting">&nbsp;&nbsp;&nbsp;
    <b>3. Level 3 </b>
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
        {items3.length?(items3).map((item3) => 
              <div>
                
                <StyledTableRow key={item3}>
               <StyledTableCell component="th" scope="row">
                 {item3.name}
               </StyledTableCell> 
               <StyledTableCell align="right"><a href={`https://codeforces.com/problemset/problem/${item3.cid}/${item3.category}` } target="_blank"><button className="bt3">Solve</button></a></StyledTableCell>
               </StyledTableRow>
              </div>
          ):null}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
    <Footer />
    </div>
  );
}