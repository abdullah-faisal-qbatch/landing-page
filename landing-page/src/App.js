import "./App.css";
import {
  faStickyNote, faUserCircle, faThumbsUp, faHeart, faFile, faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import Workflow from "./cards/Workflow";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RequestDemo from "./components/RequestDemo";
import ImageSection from "./components/ImageSection";

function App() {
  const iconsData = [
    {
      icon: faStickyNote,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
    {
      icon: faUserCircle,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
    {
      icon: faThumbsUp,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
    {
      icon: faHeart,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
    {
      icon: faFile,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
    {
      icon: faAddressBook,
      heading: "Robust Workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dictaminus molestiae vel beatae natus eveniet.",
    },
  ];
  return (
    <>
      <Navbar />
      <Header />
      <div className="grid grid-cols-3 justify-content mt-5 ml-60 mr-80 gap-5 page-icons">
        {iconsData.map((index) => (
          <Workflow
            icon={index.icon}
            heading={index.heading}
            description={index.description}
          />
        ))}
      </div>
      <ImageSection />
      <RequestDemo />
      <Footer />
    </>
  );
}
export default App;
