import { useRecoilState } from 'recoil';

import { themeModeState } from '@/store/theme';

import { Const } from '../../../const';
import { CardFlip } from './CardFlip';

interface Props {
  id: string;
  position: string;
  company: string;
  dateRange: string;
  description: string;
  src: string | null;
  location: string;
  imgSrc: string;
  bullets: string[];
  svgs: string[];
}

export const CardGrid = <T extends Props>({
  items,
  getCellFront,
  getCellBack,
}: {
  items: Array<T>;
  getCellFront: (item: T) => JSX.Element;
  getCellBack: (item: T) => JSX.Element;
}) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeModeState);
  return (
    <>
      <div
        style={{
          marginTop: Const.pad,
          marginBottom: Const.pad,
          maxWidth: '100%',
          display: 'grid',
          // gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr))',
          gridTemplateColumns: Const.css.cardGrid,
          gap: `${Const.pad}px ${Const.pad * 3}px`,
        }}
      >
        {items.map((i) => (
          <CardFlip
            key={i.id}
            style={{
              background: currentTheme === 'light' ? Const.css.cardLight : Const.css.cardDark,
              border: currentTheme === 'light' ? Const.css.borderLight : Const.css.borderDark,
              marginTop: 0,
              overflowY: 'auto',
            }}
            front={getCellFront(i)}
            back={getCellBack(i)}
          />
        ))}
      </div>
    </>
  );
};
