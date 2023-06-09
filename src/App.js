import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './component/Home';
import MyProfile from './component/MyProfile';
import Mission from './component/Mission';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
