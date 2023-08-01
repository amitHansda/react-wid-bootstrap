import { useState } from "react";
import NavBar from "./components/NavBar";
import UserSignUp from "./components/UserSignUp";

function App() {
  const [userInputs, setUserInputs] = useState({
    firstName: 'Thomas',
    lastName: 'Hank',
    email: 'thomas.hank33@gmail.com'
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs((input) => {
      return {
        ...input,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitClickedHandler = () => {
    console.dir(userInputs);
  }
  const resetClickHandler = () => {
    setUserInputs({
      firstName: '', lastName: '', email: ''
    })
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <h1>Sign Up</h1>
            <UserSignUp onChange={changeEventHandler} userInputs={userInputs}></UserSignUp>
            <button type="button" 
                className="btn btn-success mt-1 mx-1" onClick={submitClickedHandler}>Submit</button>
            <button type="button" 
                className="btn btn-secondary mt-1" onClick={resetClickHandler}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
