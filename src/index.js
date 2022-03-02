// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(
  
//     <App />,
//   document.getElementById('root')
// );




import React, { useState } from "react";
import { render } from "react-dom";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const CompoundInterest = () => {
  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

//   const compoundInterest = (p, t, r, n) => {
//     const amount = p * (Math.pow((1 + (r / n)), (n * t)));
//     const interest = amount - p;
//     return interest;
//  };
 

  const calculate = () => {
    // A=p(1+(r/n))^(nt)
    // const result = principal * Math.pow(1 + interest, years);
    const result = interest * (Math.pow((1 + (result / principal)), (principal * years)));
    setResult(result.toFixed(2));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <form>
          <TextField
            label="What is the principal?"
            variant="outlined"
            type="number"
            onChange={(e) => setPrincipal(e.target.value)}
          />
          
          <TextField
            label="How many years?"
            variant="outlined"
            type="number"
            onChange={(e) => setYears(e.target.value)}
          />
          <TextField
            label="Annual Interest rate?"
            variant="outlined"
            type="number"
            onChange={(e) => setInterest(e.target.value / 100)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              calculate();
            }}
          >
            Calculate
          </Button>
          <br />
          <br />
          <div style={{ fontSize: "30px" }}>${result}</div>
        </form>
      </div>
    </>
  );
};

render(<CompoundInterest />, document.querySelector("#root"));