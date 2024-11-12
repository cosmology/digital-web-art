import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'Ivan Prokic';

const email = 'ivanprokic@gmail.com';

const repository = 'https://github.com/cosmology';

const linkedIn = 'https://www.linkedin.com/in/ivan-prokic/';

const awsCert = 'https://www.credly.com/badges/13e20180-669e-4ed5-a9d3-a40c7b43b7b9/public_url';

const resumePDF = 'http://localhost:5173/IvanProkicCV.pdf';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'What are you looking for?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Ivan Prokic personal portfolio',
};
const giphy404 = 'https://giphy.com/gifs/iranserver-iran-server-bluebot-blue-bot-aYpmlCXgX9dc09dbpl';

export {
  awsCert,
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
  linkedIn,
  resumePDF,
};
