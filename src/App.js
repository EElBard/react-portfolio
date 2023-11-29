import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import { Helmet } from "react-helmet";

function App() {

  return (
    <>
    <Helmet>
      <title>Ethan El Bard Portfolio</title>
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
