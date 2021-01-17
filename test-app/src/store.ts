import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./reducers", () => {
        const newRootReducer = require("./reducers").default;
        store.replaceReducer(newRootReducer);
    });
}

export type AppDispatch = typeof store.dispatch;

