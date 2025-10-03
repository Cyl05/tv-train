## Rough workflow of using Redux for State Management

1. **Configuration of Redux Store in the `store.ts` file in `store/state` directory.**
    - Store is defined using `configureStore` method.
    - The object passed into `configureStore` can have contents which can be the reducers, middleware or devtools to be used in the React+Redux application.
    - exporting of type `RootState` which can be used to access the slices of the store.
    - exporting of type `AppDispatch` which can be used to access the actions of slices.
2. **A slice can be defined in the same directory or in its own folder**
    - Contains the:
      - `interface` for the state
      - `initialState` for the interface
      - the slice initialised by the `createSlice` function which also contains actions to modify the state
3. **The store state can be accessed anywhere in the application by using the `useSelector` function**
4. **The actions can be acsessed anywhere in the application by using `useDispatch`**.