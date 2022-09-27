import { Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Semestr from '../Semestr/Semestr';
import Profile from '../Profile/Profile';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';
import Page404 from '../404/404';

import './App.css';


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/semestr" element={<Semestr />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route exact path="/map" element={<Map />}/>
                <Route exact path="*" element={<Page404 />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
