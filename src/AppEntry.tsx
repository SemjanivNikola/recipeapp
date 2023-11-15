import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { store } from "./store/store.ts";

const AppEntry = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default AppEntry;
