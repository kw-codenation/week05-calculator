import './App.css';
import {useState} from 'react'
import KeyPad from './components/KeyPad';

let calculation = ''
let number1 = ''
let number2 = ''
let result = 0

function App() {
  
  const [display, setDisplay] = useState(0)
  const [operation, setOperation] = useState('')
  /*
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  */
  const doCalc = () =>
  {
    const num1 = parseInt(number1)
    const num2 = parseInt(number2)
    
    switch (operation)
    {
      case '+': result = (num1 + num2);break;
      case '-': result = (num1 - num2);break;
      case '*': result = (num1 * num2);break;
      case '/': result = (num1 / num2);break;
      default : result = 0;break; 
    }
    
    //result = eval('num1 ' + operation + 'num2')
    calculation += ' = ' + result
    number1 = ''
    number2 = ''

    setDisplay(result)
    setOperation('')

  }

  const save = (num) =>
  {

    if (operation === '')
    {
      calculation = ''
      number1 += num
      calculation += number1
      result = number1
      setDisplay(number1)
    }
    else
    {
      number2 += num
      calculation += num
      setDisplay(number2)
    }

  }

  const change = (operation) =>
  {
    number1 = result
    calculation = number1 + ' ' + operation + ' '
    setOperation(operation)
  }

  const clear = () =>
  {
    calculation = ''
    number1 = ''
    number2 = ''
    setOperation('')
    setDisplay(0)

  }

  return (
    <div className="App">
      <KeyPad display={display} doCalc={doCalc} save={save} change={change} clear={clear} calculation={calculation} />
    </div>
  );
}

export default App;
