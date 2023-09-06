import React from "react";
import Login from "./Login"

var userIsRegister = false;

function App() {
    return <div className="container"><Login userIsRegister = {userIsRegister} /> </div>
}

export default App;