import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';
import Container from './components/Container';
import TextArea from './components/TextArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='background'>
      <Banner />
       <TextArea />
      <Container />
      <div className='footer'>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
