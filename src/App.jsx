import './App.css'
import Counter from './Counter'
import Employee from './Employee'
import Number from './Number'
import Team from './Team'
import Users from './Users'
import Friends from './Freinds'


function App() {
   
  function handelClick(){
    alert('button clicked')
  }

  const handelerClick2 = () => {
    alert('clicked 2 button')
  }

  return (
    <>

      <Friends></Friends>

    <Users></Users>

    <Team></Team>

     <Employee></Employee>

    
    
      <h3>React Consept  2 </h3>
      <Counter></Counter>
      <button onClick={handelClick}>Click me</button>
      <button onClick={handelerClick2}>Click here</button>

      <Number></Number>
    </>
  )
}

export default App
