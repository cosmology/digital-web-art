import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AnimatePresence, motion } from 'framer-motion';

import routes from '..';
import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes location={location} key={location.pathname}>
        {Object.values(routes).map(({ path, component: Component }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key={path}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{
                      // bounce: 0.1,
                      duration: 0.6,
                    }}
                  >
                    <Component />
                  </motion.div>
                </AnimatePresence>
              }
            />
          );
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
