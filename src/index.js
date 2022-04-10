import React from "react";
import ReactDOM from "react-dom";
const fname="Anony";
const lname="Messiah";
const yourNumber=8
ReactDOM.render(<div><h1>Hello {fname+" "+lname}!</h1>
<p>Your lucky number is {yourNumber+25}</p></div>, document.getElementById("root"));
