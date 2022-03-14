import './App.css';
// config
import { paths } from './config/paths';
// components
import { LandingPage } from '../src/routes/landingPage/LandingPage';
import { BlogPage } from './routes/blogPage/BlogPage';
// default
import { PageNotFound } from './routes/defaultRoutes/pageNotFound/PageNotFound';
// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={paths.home} element={<LandingPage />} />
        <Route path={paths.blog} element={<BlogPage />} />
        <Route path={paths.notFound} element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
