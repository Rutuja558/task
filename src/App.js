import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/style.scss'
import { Navigation } from './components/Navigation';
import { FriendsReferred } from './pages/FriendsReferred';
import { ReferAndEarn } from './pages/ReferAndEarn';

function App() {
  return <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<ReferAndEarn />} />
        <Route path='/friendsReferred' element={<FriendsReferred />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
