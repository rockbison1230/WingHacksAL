import {Routes, Route} from "react-router-dom";
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App(){
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Landing/>}/> {/*default page*/}
        </Routes>
        <Footer/>
        </>

    );
  }
  
  export default App;

  //reminder : "  Line 11:52:  Comments inside children section of tag should be placed inside braces  react/jsx-no-comment-textnodes"
  //basically {/*comment*/}