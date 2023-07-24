import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Workflow from "./components/Workflow";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
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
      <Navbar></Navbar>
      <Header></Header>
      <div className="grid grid-cols-3 justify-content mt-5 ml-60 mr-80 gap-5 page-icons">
        {iconsData.map((index) => (
          <Workflow
            icon={index.icon}
            heading={index.heading}
            description={index.description}
          ></Workflow>
        ))}
      </div>
      <ImageSection></ImageSection>
      <RequestDemo />
      <Footer />
    </>
  );
}
export default App;