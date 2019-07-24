import React from "react";
import logo from "./icons/takman_technologies_logo.svg";
import github from "./icons/github-logo.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
import email from "./icons/email.svg";
import phone from "./icons/phone.svg";
import Footer from "./components/footer/Footer";
import "./App.css";

/*
function App() {
  return (
    <div className="App" style={{flex:1}}>
      <div style={{flex:4}}> <img src={logo}/></div>
      <div style={{flex:6}} className="App-body">
        <div style={{flex:1}}></div>
        <div style={{flex:2}}>
          <a href="https://github.com/SimonTakman/">
            <img src={github}/>
          </a>
        </div>
        <div style={{flex:2}}>
          <a href="https://linkedin.com/in/simontakman">
            <img src={linkedin}/>
          </a>
        </div>
        <div style={{flex:2}}>
          <a href="https://twitter.com/simontakman">
            <img src={twitter}/>
          </a>
        </div>
        <div style={{flex:2}}>
          <a href="mailto:simon@takmantechnologies.com">
            <img src={email}/>
          </a>
        </div>
        <div style={{flex:2}}>
          <a href="tel:+46703253698">
            <img src={phone}/>
          </a>
        </div>
        <div style={{flex:1}}></div>
      </div>
      <div style={{flex:2}} className="footer">
          <p className="footer-text">© 2019 Takman Technologies AB - Gothenburg</p>
        </div>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <div style={{ flex: 4, backgroundColor: "red" }} />
      <div style={{ flex: 6, backgroundColor: "yellow" }} />
      <div style={{ flex: 2 }}>
        <Footer />
      </div>
    </div>
  );
}
export default App;
