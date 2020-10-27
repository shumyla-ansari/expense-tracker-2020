import React, { useContext, useState } from "react";
import { transactionContext } from "./context";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
    width: "130px"
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: "100px",
  },
  addbtn: {
    marginTop: 10,
    color: "#0d7377",
    fontSize: 80,
  },
}));

export default function AddTransaction() {
  const classes = useStyles();
  const { dispatch } = useContext(transactionContext);

  const [initialValue, setInitialValue] = useState({
    itemName: "",
    amountNum: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInitialValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addItem(e) {
    dispatch({
      type: "ADD_TRANSACTION",
      itemName: initialValue.itemName,
      amountNum: parseInt(initialValue.amountNum),
    });
    setInitialValue({
      itemName: "",
      amountNum: "",
    });
    e.preventDefault();
  }

  return (
    <div className='form'>
      <form>
        <TextField
          label='Description'
          id='filled-start-adornment'
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          variant='filled'
          onChange={handleChange}
          type='text'
          value={initialValue.itemName}
          name='itemName'
        ></TextField>

        <FormControl className={classes.margin} variant='filled'>
          <InputLabel htmlFor='filled-adornment-amount'>Amount</InputLabel>
          <FilledInput
            id='filled-adornment-amount'
            onChange={handleChange}
            type='number'
            value={initialValue.amountNum}
            name='amountNum'
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />
        </FormControl>
        <span>
          <IconButton
            className={classes.addbtn}
            onClick={addItem}
            type='submit'
            name='submitBtn'
          >
            <AddCircleRoundedIcon />
          </IconButton>
        </span>
      </form>
    </div>
  );
}
