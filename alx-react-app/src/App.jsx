import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Header from "./Header";    
import Main from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./UserProfile";
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
