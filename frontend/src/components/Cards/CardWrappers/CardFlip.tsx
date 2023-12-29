import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { themeModeState } from '@/store/theme';

// import ReactCardFlip from 'react-card-flip';
import { Const } from '../../../const';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { getInteractiveSvgs } from '../../Svgs';
import { Card } from '../card';

export const CardFlip = ({ front, back, style = {} }: { front: JSX.Element; back: JSX.Element; style?: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // is the grid layout 1fr 1fr or 1fr ?
  const isGrid = useBreakpoint().projectsBreak();
  const svgs = getInteractiveSvgs(Const.css.fc0, 32);
  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);

  const flipIcon = (
    <button
      aria-label={'Flip card'}
      onClick={() => setIsFlipped((p) => !p)}
      style={{
        position: 'absolute',
        background: currentTheme === 'light' ? Const.css.cardLight : Const.css.cardDark,
        border: 0,
        bottom: Const.pad * 3,
        right: Const.pad,
        cursor: 'pointer',
      }}
    >
      {isFlipped ? svgs.toFront : svgs.toBack}
    </button>
  );

  // icon={flipIcon}
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Card style={style}>{front}</Card>

      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection={isGrid ? 'horizontal' : 'vertical'}>
        <Card style={style} icon={flipIcon}>
          {front}
        </Card>

        <Card style={style} icon={flipIcon}>
          {back}
        </Card>
      </ReactCardFlip> */}
    </div>
  );
};
