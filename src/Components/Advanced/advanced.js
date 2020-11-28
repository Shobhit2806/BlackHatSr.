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
import './advanced.css'
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


export default function Advanced() {
  const classes = useStyles();
  const [level1,setlevel1] = useState(['']);
  const [level1index,setlevel1index] = useState(['']);
  const [level1cid,setlevel1cid] = useState(['']);

  
  useEffect(async () => {
    
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/questions/api/advance/',
            headers: {
                'Content-Type': 'application/json'
                }, 
            data: {
             handle:'rattle_coder'
            }
          }).then(response=>{
              console.log(response.data);
              setlevel1(response.data.qnsbnk.name)
              setlevel1index(response.data.qnsbnk.index)
              setlevel1cid(response.data.qnsbnk.contestId)

             
          });
  }, [])
  
  var items = level1.map((level, index) => {
    return {
      name: level,
      category: level1index[index],
      cid: level1cid[index]
    }
  });

  

  console.log(items);
  return (
      <div className="tblc">
      <div className="apbr"><Appbar /></div><br/> 
      <div>
      <Temp />
      </div>
     
    

      <div className="Array">&nbsp;&nbsp;&nbsp;
      <b>1. Advanced Quetions </b>
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
               <StyledTableCell align="right"><a href={`https://codeforces.com/problemset/problem/${item.cid}/${item.category}`} target="_blank"><button className="bt3">Solve</button></a></StyledTableCell>
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