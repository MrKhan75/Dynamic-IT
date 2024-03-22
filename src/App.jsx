
import './App.css';
import Banner from './Component/Header/Banner';
import Navbar from './Component/Header/Navbar';
// import About from './Component/Main/About';
import PriceOption from './Component/PriceOption/PriceOption';
import Charts from './Component/Charts/Charts';

function App() {


  return (
    <>
    <div className="mianContainer">
        <div className="container mx-auto px-5 md:px-10">
           <div className="header">
              <Navbar></Navbar>
              <Banner></Banner>
           </div>
           <div className="main">
              {/* <About></About> */}
              <PriceOption></PriceOption>
              <Charts></Charts>
           </div>
        </div>
    </div>
    </>
  )
}

export default App
