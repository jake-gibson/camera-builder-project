import { toggleComparedForMiddleware } from './equipmentSlice';
const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_HOST : '';

const fetchingMiddleware = () => {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      console.log(
        'Dispatch Middleware has received a message. Here are the contents: ',
        action
      );

      // OPTION 2:

      // if (action.type === 'equip/toggleCompared') {
      //   const state = getState();
      //   const firstObj = state.equip.aiComparison.firstBuild;
      //   const secondObj = state.equip.aiComparison.secondBuild;

      //   const compareProducts = () => {
      //     if (!firstObj.loaded || !secondObj.loaded) return;

      //     const searchParams = new URLSearchParams({
      //       productTitle: firstObj?.title,
      //       comparisonProduct: secondObj?.title,
      //     });

      //     fetch(`${API_BASE_URL}/aiProductInfo?${searchParams.toString()}`)
      //       .then((res) => res.json())
      //       .then((res) => {
      //         dispatch(toggleComparedForMiddleware(res.aiRes));
      //       });
      //   };
      //   compareProducts();
      // } else return next(action);
      return next(action);
    };
};

export default fetchingMiddleware;
