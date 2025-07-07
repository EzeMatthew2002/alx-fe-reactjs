import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";    
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <Main />
      <Footer />
      <UserProfile name="Ezebong matthew" age={22} bio="A frontend developer" />
      <UserProfile
        name="John Doe"
        age={30}
        bio="Tech enthusiast and traveler."
      />
    </div>
  );
}

export default App;
