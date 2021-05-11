import { useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { genPrime } from "./helper"


function App() {
  const [primes, setPrimes ] = useState([])  //Place to store the generated numbers
  const [number, setNumber ] = useState(0) // State to hold the use input
  
  //The function will be triggered once the user clicks on the Generate button
  const getPrimeNumbers = () => {
    let array = genPrime(number) //The genPrime function is called 
    setPrimes(array) //This will take the return value and set it to our primes Array
  }

  return (
    <div className="App">
        <div>
          <h2>Prime Number Generator</h2>
          <input type="number" 
              placeholder="Enter Number" 
              onChange={(e) => setNumber(e.target.value)}
          /><br/>
          <Button variant="primary" onClick={getPrimeNumbers}>Generate</Button>
        </div>


        <Table striped bordered hover style={{width: "80vw", margin: "auto"}}>
          <tr>
            <th></th>
            {primes.map((prime, index) => <th key={index}>{prime}</th>)}
          </tr>
          {primes.map((prime, index) => (
            <tr key={index}>
              <th key={index}>{prime}</th>
              {primes.map((secondPrime) => {
                return <td key={index}>{secondPrime * prime}</td>
              })}
            </tr>
          ))}
        </Table>
    </div>
  );
}

export default App;
