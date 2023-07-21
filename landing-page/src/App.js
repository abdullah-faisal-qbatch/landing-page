import './App.css';
import Navbar from './components/Navbar';
// import "./App.css";
import Header from "./components/Header";
import logo from "./logo.jpeg";
import home from "./home.jpg";
import Workflow from './components/Workflow';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';



function App() {
  return (
    <>
      {/* // Navbar Element Start */}
      {/* <div className='-skew-y-3 bg-orange-400 absolute' > */}

      <Navbar></Navbar>
      
      {/* Navbar Element End */}
      {/* Header Element Start */}
      <Header></Header>      
      {/* </div> */} 
      {/* Header Element End */}
      {/* Element Section Start */}
      {/* <div className="flex flex-row mx-auto mt-10 space-y-0 ml-10 items-center"> */}
      <div className="grid grid-cols-3 justify-content mt-5 ml-40 mr-40">      
        {/* Elements */}
        <Workflow icon={faCoffee}/>
        <Workflow icon={faUserCircle}/>
        <Workflow icon={faThumbsUp}/>
        <Workflow icon={faHeart}/>
        <Workflow icon={faFile}/>
        <Workflow icon={faAddressBook}/>
      </div>
      {/* Element Section End */}

      {/* Section Before Footer Start */}
      <Footer/>
      {/* Section Before Footer End */}
      </>
    );
}
export default App;