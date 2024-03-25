
import './App.css'
import LineChart from './component/LineChart'
import PriceOptions from './component/PriceOptions/PriceOptions'
// import DaisyNav from './component/daisyNav/DaisyNav'
import NavBar from './component/navbar/NavBar'
import { Watch } from 'react-loader-spinner'


function App() {


  return (
    <>

      <NavBar></NavBar>

      <PriceOptions></PriceOptions>
      <div className='flex items-center justify-center'>
        <h2 className="text-6xl text-center shadow-lg font-bold font-serif m-4 text-blue-500">Burn your calories</h2>
        <div className="">
          ;<Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>

      <LineChart></LineChart>


    </>
  )
}


export default App

// load spinner from : https://mhnpd.github.io/react-loader-spinner/docs/components/falling-lines
// icons : https://react-icons.github.io/react-icons/search/#q=check
// chart from : https://recharts.org/en-US/guide
