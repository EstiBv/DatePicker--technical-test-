import React from "react";
import "../styles/App.scss";
// components
import Header from "./Header";
import Calendar from "./main/Calendar";
import Aside from "./main/Aside";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Aside />
        <Calendar />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
