import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StaticCloud } from '../components/Clouds/StaticCloud';
import { ThemedH1 } from '../hooks/useTheme';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <ThemedH1 text="Home page" />
      {/* <p>
        <Link to="/about">Go to the About Page!</Link>
      </p> */}
      <StaticCloud />
      <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
    </div>
  );
};

export default HomePage;
