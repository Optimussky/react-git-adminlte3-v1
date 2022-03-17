import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";



function App() {
  return (
    <div class="wrapper">
     <Preloader/> 
      <Header/>
      <Aside/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
