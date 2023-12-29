import { Const } from '../../const';

export const Card = ({
  children,
  style,
  icon,
}: {
  children: JSX.Element | JSX.Element[];
  style?: any;
  icon?: JSX.Element;
}) => {
  return (
    <div
      //className="card" // check  vars.css for media, this style overrides it
      style={{
        WebkitBoxShadow: Const.css.shadow,
        MozBoxShadow: Const.css.shadow,
        boxShadow: Const.css.shadow,
        padding: Const.pad * 2,
        marginBottom: Const.pad * 2,
        // backgroundColor: '#ff00ff',
        // backgroundColor: Const.css.bgc1,
        borderRadius: Const.css.cardRad,
        border: Const.css.border,
        ...style,
      }}
    >
      {children}
      {icon}
    </div>
  );
};

/*
When centring an element, which of the following can be used to do so both horizontally and vertically?

What is the difference between useCallback and useMemo?

No real difference
useCallback returns a memoized function and useMemo returns a memoized value
useCallback returns a memoized value and useMemo returns a memoized function
useCallback can be used in a React component as a function, useMemo is a HOC that wraps a component

*/
