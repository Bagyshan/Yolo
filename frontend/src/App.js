import './App.css';
import ApplicationForm from './components/contacts/ApplicationForm';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Dordoimap from './components/mapdordoi/Dordoimap';
import Navbar from './components/navbar/Navbar';
import Reviews from './components/reviews/Reviews';
import ReviewsPage from './components/reviews/RewiewsPage';
import Services from './components/services/Services';


function App() {
  return (
    <div className="App">
         <Navbar/>
         <Main/>
         <Services/>
         <Dordoimap/>
         <Reviews/>
         <ApplicationForm/>
         {/* <ReviewsPage/> */}
         <Footer/>
    </div>
  );
}

export default App;
