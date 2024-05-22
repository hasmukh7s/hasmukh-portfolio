import Header from "./components/layouts/Header";
import Banner from "./components/common-components/Banner";
import About from "./components/common-components/About";
import Footer from "./components/layouts/Footer";
import Tabbing from './components/common-components/Tabbing';
import Testimonial from "./components/common-components/Testimonial";
// import Counter from "./components/common-components/Counter";
import Skills from "./components/common-components/Skills";
import CalltoAction from "./components/common-components/CalltoAction";
import HighLights from "./components/common-components/HighLights";
import Projects from "./components/common-components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery";

// $(document).ready(function(){
//   $(window).on('load',function(){
//     setTimeout(function(){ 
//     $('.page-loader').fadeOut('slow');
//     $('body').css('overflow', 'auto');
//     },3500);
//   });
// });


function App() {
  return (
    <>
    {/* <div class="page-loader">
	<div class="spinner"></div>
	<div class="txt">Cargando vacaciones</div>
</div> */}

      <Header />
      <Banner />
      <About />
      <Tabbing />
      <HighLights />
      
      {/* <Counter /> */}
      <Testimonial />
      <Projects /> 
      <Skills />
      
      <CalltoAction />
      <Footer />

      

      
       </>
  )
}

export default App;
