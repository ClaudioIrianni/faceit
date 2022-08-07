import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import "./App.css";


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

 onSubmit = (e) => {
  console.log("click")
 }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
