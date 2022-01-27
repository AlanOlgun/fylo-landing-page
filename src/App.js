import Navbar from './components/Header/Navbar';
import "./App.css"
import Intro from './components/Intro/Intro';
import Description from './components/Description/Description';
import Section from './components/Section/Section';
import Comment from './components/Comment/Comment';
import Footer from './components/Footer/Footer';

const App = () => {
  return <div className='Main'>
    <Navbar/>
    <Intro/>
    <Description/>
    <Section/>
    <Comment/>
    <Footer/>
  </div>;
};

export default App;
