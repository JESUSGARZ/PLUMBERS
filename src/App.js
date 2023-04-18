
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Icon from './components/Icon';
import image from "./utils/whatsaapimage.png";
import MainSection from './components/MainSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Banner from './components/Banner';


const wpLink = 'https://wa.me/573117284983';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <MainSection /> 
      <SecondSection />
      <Banner/>
      <ThirdSection />
      <Footer/>
      <Icon image = {image} url= {wpLink}/>
    </div>
  );
}

export default App;
