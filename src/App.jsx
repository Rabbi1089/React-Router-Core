
import './App.css'
import PriceOptions from './component/PriceOptions/PriceOptions'
// import DaisyNav from './component/daisyNav/DaisyNav'
import NavBar from './component/navbar/NavBar'


function App() {


  return (
    <>

      <NavBar></NavBar>
      <h1 className=' text-6xl text-red-600 text-center bg-green-300 p-2'>Vite + React</h1>
      <PriceOptions></PriceOptions>


    </>
  )
}

export default App
