import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import UserContextProvider from "./context/provider/user-context-provider";
import Routers from "./Routers/routers";
import Header from "./Header/Header";

export default function App() {
  return (
    <UserContextProvider>
      <>
        
        <Routers />
        {/* <Header /> */}
      </>
    </UserContextProvider>
  );
}
