import { atom } from 'recoil';

export type Route = {
  path: string;
};

// atom represents a changable subscribable piece of state
export const routesState = atom({
  key: 'routes-state',
  default: '/',
});

export const routesBottomNavIndex = atom({
  key: 'routes-bottom-nav-index',
  default: '/',
});

// selector is a pure function plus info that it depends on so we can recompute the part
// that it depends on it only (derived data)

// much more flexible tha hooks, giu can call them in loops and conditionally
// export const slicedAnimeTitles = selector({
//   key: 'slicedAnimeTitles',
//   get: ({ get }) => {
//     const routes = get(routesState);
//     const routeIndex = get(routesBottomNavIndex);

//     const newAnimeList = [...routes];
//     const arrIndex = routeIndex === 0 ? 0 : routeIndex;

//     return newAnimeList.sli;
//   },
// });

// function RouterRoutes() {
//   const [route, setRoute] = useRecoilState(routesState)
// }

// const addRoute: (n: string) => Route = (route: string) => {
//   console.log('add route ', route);
//   return { route };
// };

// const tempFahrenheit = atom({
//   key: 'tempFahrenheit',
//   default: 32,
// });

// const tempCelsius = selector({
//   key: 'tempCelsius',
//   get: ({ get }) => Math.round(((get(tempFahrenheit) - 32) * 5) / 9),
//   set: ({ set }, newValue: any) => {
//     console.log(newValue instanceof DefaultValue, newValue, typeof newValue, newValue.toString());
//     set(tempFahrenheit, newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32);
//   },
// });

// const A = () => {
//   const route = useRecoilValue<Route>(routeSelector);
//   return (
//     <div>
//       name: {route.currentRoute}
//       <br /> producedAt: {food.producedAt}
//     </div>
//   );
// };

// const Button = ({
//   selector,
//   callback,
//   title,
// }: {
//   title: string;
//   selector: RecoilState<any>;
//   callback: (s: any) => any;
// }) => {
//   const setState = useSetRecoilState(selector);
//   const onClick = () => {
//     setState(callback);
//   };
//   return (
//     <button type="button" onClick={onClick} style={{ marginRight: '5px' }}>
//       {title}
//     </button>
//   );
// };

// class App extends Component {
//   milkCallback = (state: string) => {
//     return { name: 'milk' };
//   };

//   breadSameCallbak = (state: string) => {
//     return { name: 'bread' };
//   };

//   eggSameCallbak = (state: string) => {
//     return { name: 'egg' };
//   };

//   render() {
//     return (
//       <div>
//         <RecoilRoot>
//           <A />
//           <br />
//           <div>
//             <Button
//               selector={foodSelector}
//               callback={this.milkCallback}
//               title={'new milk'}
//             />
//             <Button
//               selector={foodSelector}
//               callback={this.breadSameCallbak}
//               title={'new bread'}
//             />
//             <Button
//               selector={foodSelector}
//               callback={this.eggSameCallbak}
//               title={'new egg'}
//             />
//           </div>
//         </RecoilRoot>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));
