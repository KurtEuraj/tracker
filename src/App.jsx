import './App.scss';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
