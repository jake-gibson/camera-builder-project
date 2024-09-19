# Fetching Options for a React-Redux SPA

#### The below function will take the name of two products `productTitle` and `comparisonProduct` and send a POST request to a server endpoint `/aiProductInfo`. The backend will make an API request to OpenAI's ChatGPT with the following query:

    "...tell me why ${productTitle} is or is not compatible with ${comparisonProduct} including any adapters that may be needed."

#### The function in question:

```javascript
const searchParams = new URLSearchParams({
  productTitle: firstObj?.title,
  comparisonProduct: secondObj?.title,
});

const compareProducts = () => {
  if (!firstObj.loaded || !secondObj.loaded) return;

  fetch(`/aiProductInfo?${searchParams.toString()}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(toggleCompared());
      setAiResponse(res.aiRes);
    });
};
```

### Let's explore the possible locations to make this fetch request.

## Option 1: Vanilla React Component Fetch Call

- This is the most obvious place to put the function.
- Creates readability issues, making React UI Component Files more bloated
- Does not have caching, would have to employ useMemo
- Must hardcode any other considerations (caching, loading state, throttling)

## Option 2: Redux Middleware / Thunk

By itself, a Redux store doesn't know anything about async logic. Any asynchronicity has to happen outside the store.

Middleware gives us the ability to:

- Execute extra logic when any action is dispatched (logging the action)
- Interpreting other values besides plain action objects, such as functions and promises, by intercepting them
- Pause, modify, delay, replace, or halt dispatched actions (authentication, edge cases)
- Write extra code that has access to dispatch and getState (Async API Calls, HTTP, Websockets, etc.)

Pro:

- This will allow us to clean up the logic in the UI / React Components (better for maintainability, testing and error handling)
  - We can test API calls without having to render any components
- We can move more state logic out of React and into Redux (better for single source of truth!)
  - This way we can make same or similar fetch calls without duplicating logic
- Allows us to include caching logic (though we have to write this ourselves) or dispatch both sync AND async actions from the same place

Cons:

- Strange series of nested callbacks make middlware confusing for low readability
- You have to re-dispatch actions from inside middlware, complicates logic
- Have to hardcode caching, loading state, throttling for performant UX

```javascript
const fetchingMiddleware = () => {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {

      if (action.type === 'equip/toggleCompared') {
        const state = getState();

        /** Same logic as above */

          fetch(`/aiProductInfo?${searchParams.toString()}`)
            /** Same logic as above */

            .then((res) => res.json())
            .then((res) => {
              dispatch(toggleComparedForMiddleware(res.aiRes));
            });
        };
        compareProducts();
      } else return next(action);
    };
};
```

## Option 3: (Going Beyond...) React (TanStack) Query, SWR and others

SWR:

- Built in revalidation and loading states

TanStack:

- Library used for managing server state, goes beyond the purposes of this toy app
- However, if we were maintaining state beyond this single dev app, this would come in handy and replace the functionality of redux, which we are using for client side state management
- This would be great if our app was built in NextJS to leverage server-side rendering perfomance optimizations

## Option 4: RTK Query (Mutations)

Pros:

- Has built-in support for data fetching, caching, and synchronization like the competing libraries, while reducing boilerplate
- Has exciting features like optimistic updates and prefetching for more seamless UX
- Integrates well with Redux and employs Redux DevTools

With just this setup:

```javascript
export const aiProductInfo = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  reducerPath: 'aiProductInfo',
  endpoints: (builder) => ({
    compareProducts: builder.mutation({
      query: (data) => ({
        url: 'aiProductInfo',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.aiRes,
    }),
  }),
});

export const { useCompareProductsMutation } = aiProductInfo;
```

You can call the auto-generated hook directly in your application:

```javascript
const [compareProduct, { data }] = useCompareProductsMutation();
<button onClick={() => compareProductAndDispatch()}></button>;
```
