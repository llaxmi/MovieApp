import { createContext, useContext } from "react";

const GlobalContext = createContext();
export const useMovieContext = () => useContext(GlobalContext);
export default GlobalContext;
