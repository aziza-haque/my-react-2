import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'

function App() {
  
  function handleClicked(){
    alert('i am clicked.')
  }
  const handleClicked2=()=>{
    alert('clicked')
  }

  const handleAdd=(num)=>{
    const newNum=num+5;
    alert(newNum)
  }

  return (
    <>

      <h3>Vite + React</h3>
      
      <Batsman></Batsman>

      <Counter></Counter>
      {/* <button onclick="handleClicked()">click me</button> */}
      <button onClick={handleClicked}>click me</button>
      <button onClick={handleClicked2}>click me</button>
      <button onClick={()=>handleAdd(7)}>click add</button>
     
    </>
  )
}

export default App
