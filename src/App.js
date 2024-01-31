import React from 'react';
import styles from './App.module.css';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppRoutes } from './common/routes/AppRoutes';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import NonProfit from './pages/NonProfit/NonProfit';
import Website from './pages/Website/Website';
import Newspaper from './pages/Newspaper/Newspaper';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Articles from './pages/Articles/Articles';
import BlogArticle from './pages/BlogArticle/BlogArticle';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const Layout = () => {
    return (
      <div className={styles.app}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createHashRouter(
    [
      {
        path: AppRoutes.MAIN,
        element: <Layout />,
        errorElement: <h1>PAGE NOT FOUND</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <Home />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>
          },

          {
            path: AppRoutes.GAME,
            element: <Game />,
            errorElement: <h1> PAGE NOT FOUND 2</h1>
          },
          {
            path: AppRoutes.NONPROFIT,
            element: <NonProfit />,
            errorElement: <h1> PAGE NOT FOUND 3</h1>
          },
          {
            path: AppRoutes.WEBSITE,
            element: <Website />,
            errorElement: <h1> PAGE NOT FOUND 8</h1>
          },

          {
            path: AppRoutes.ARTICLES,
            element: <Articles />,
            errorElement: <h1> PAGE NOT FOUND 4</h1>
          },

          {
            path: AppRoutes.BLOGARTICLE,
            element: <BlogArticle />,
            errorElement: <h1> PAGE NOT FOUND 5</h1>
          },
          {
            path: AppRoutes.NEWSPAPER,
            element: <Newspaper />,
            errorElement: <h1> PAGE NOT FOUND 6</h1>
          },
          

          {
            path: AppRoutes.CONTACT,
            element: <Contact />,
            errorElement: <h1> PAGE NOT FOUND 7</h1>
          },
          {
            path: AppRoutes.HOWITWORKS,
            element: <HowItWorks />,
            errorElement: <h1> PAGE NOT FOUND 8</h1>
          }
        ]
      }
    ],
    { basename: '/' }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
