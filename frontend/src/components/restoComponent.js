import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from "@material-ui/core/Typography";
import {useDispatch,useSelector} from "react-redux";
import { loadVResto,addVResto } from "../actions/actions";




const useStyles = makeStyles((muiBaseTheme) => ({
  root:{
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    width:"40vh",
    height:"40vh",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    borderRadius:"7%",
    boxShadow: "0 8px 40px -40px rgba(255,215,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
     
    },
  },
  content: {
    alignSelf: "end",
    textAlign: "center",
    background:"gray",
    color:"white",
    opacity:"0.9",
    
    
  },
  icon: {
  color:"orange",
 

  }
}));

function RestauComponent({ name,photo }) {
  const classes = useStyles();
  
  const dispatch = useDispatch();

  //handle when the customer click on the visited button
  const [visited,setVisited]=useState(false)

  if(visited){
    dispatch(loadVResto());
    setVisited(false);
  }

  const handle = e =>{
    //this two events is to prevent to prevent the opening of the dialog 
    e.preventDefault();
    e.stopPropagation();
    
    //this var set the date to "YYYY-MM-DD"
    const  today = new Date().toISOString().slice(0, 10)
    const data={
      name:name,
      visiteddate:today
    }
    dispatch(addVResto(data));
    setVisited(true);
  }
  return (
      <>
    <Paper className={classes.root}  style={{ backgroundImage: `url(${photo})`}} >
          <Typography
            className={classes.content}
            variant={"h7"}
            gutterBottom
          >
             {name} 
            <IconButton className={classes.icon} onClick={handle} >
            <CheckCircleIcon />
          </IconButton>
          </Typography>  
      </Paper>
      </>
    
  );
}

export default (RestauComponent);
