import React, { useContext, useState } from "react";
import { transactionContext } from "./context";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    float: "left",
    "&:hover": {
      color: red[500],
    },
  },

  extendedIcon: {
    float: "left",
  },
}));

export default function Transaction({ id, itemName, amountNum }) {
  const classes = useStyles();

  const [isExpanded, setExpanded] = useState(false);

  const { dispatch } = useContext(transactionContext);

  function expand() {
    setExpanded(true);
  }

  function leave() {
    setExpanded(false);
  }

  function onDel() {
    dispatch({ type: "DEL_TRANSACTION", id });
  }
  return (
    <li className='item' onMouseOver={expand} onMouseOut={leave}>
      <li className={amountNum < 0 ? "minus" : "plus"}>
        <span className='description'>{itemName} </span>
        <span className='amount'>$ {amountNum} </span>
      </li>
      <span className='btn'>
        {" "}
        <Zoom in={isExpanded}>
          <IconButton>
            <DeleteIcon
              className={classes.margin}
              aria-label='delete'
              onClick={onDel}
              type='submit'
            ></DeleteIcon>
          </IconButton>
        </Zoom>
      </span>
    </li>
  );
}
