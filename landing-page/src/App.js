import './App.css';
import Navbar from './components/Navbar';
// import "./App.css";
import Header from "./components/Header";
import logo from "./logo.jpeg";
import home from "./home.jpg";
import final from "./final.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Workflow from './components/Workflow';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import RequestDemo from './components/RequestDemo'
import ImageSection from './components/ImageSection';
import Image from './components/Image'





function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>      
      <div className="grid grid-cols-3 justify-content mt-5 ml-60 mr-80 gap-5" style={{
      height:'60vh',
      alignItems:'center',
      // border:'5px solid red',
      justifyContent:'center',
      backgroundColor:"white",
      marginTop:"110px"

    }}      >      
        {/* Elements */}
        <Workflow icon={faStickyNote}/>
        <Workflow icon={faUserCircle}/>
        <Workflow icon={faThumbsUp}/>
        <Workflow icon={faHeart}/>
        <Workflow icon={faFile}/>
        <Workflow icon={faAddressBook}/>
      </div>
      <ImageSection></ImageSection>

    {/* <div className='grid grid-cols-3 mt-10 mb-10 ml-40 mr-40 gap-x-[-14px]'    
    >
      <Image/>
      <Image/>
      <Image/>
      </div> */}
      {/* Element Section End */}
      {/* Section Before Footer Start */}
      <RequestDemo/>
      <Footer/>
      {/* Section Before Footer End */}
      </>
    );
}
export default App;