import Counter from './Counter';
import Batsman from './Batsman';
import Loaddata from './Loaddata';
import './App.css'
import { Suspense } from 'react';

const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

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
      <Suspense fallback={<h3>loading....</h3>}>
        <Loaddata fetchUsers={fetchUsers}></Loaddata>

      </Suspense>
      

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
