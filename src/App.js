import Footer from './components/footer';
import FourthPage from './components/forthPage';
import NavBar from './components/navBar';
import SecondPage from './components/secondPage';
import StartPage from './components/startPage';
import ThirdPage from './components/thirdPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <StartPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <Footer/>
    </div>
  );
}

export default App;
