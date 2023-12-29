import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import * as Types from '@/types/types';
import BackToTop from '@/components/ScrollToTop';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import { PortfolioContext } from '@/hooks/usePortfolioContext';
import Pages from '@/routes/Pages';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

import { portfolioData } from '../data/portfolio';

const portfolio: Types.Portfolio = portfolioData;

function App() {
  const [isLoading, setLoading] = useState(true);

  // function someRequest() {
  //   //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  //   return new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
  // }

  useEffect(() => {
    const loaderElement = document.querySelector('.loader-container');

    if (loaderElement) {
      // loaderElement.remove();
      loaderElement.remove();
      setLoading(!isLoading);
    }
    // someRequest().then(() => {
    //   console.log('App someRequest after 5 sec');
    //   // const loaderElement = document.querySelector('.loader-container');

    //   // if (loaderElement) {
    //   //   loaderElement.remove();
    //   //   console.log('App loaderElement removed');
    //   //   console.log({ isLoading });
    //   //   setLoading(!isLoading);
    //   // }
    // });
  });
  if (isLoading) {
    return null;
  }
  return (
    <PortfolioContext.Provider value={{ ...portfolio, userAgent: 'mobile' }}>
      <Fragment>
        <CssBaseline />
        <Notifications />
        <HotKeys />
        <SW />
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Pages />
          <Footer />
        </BrowserRouter>
      </Fragment>
      <BackToTop children={undefined} />
    </PortfolioContext.Provider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
