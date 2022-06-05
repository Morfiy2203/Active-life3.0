import React from "react"
import Header from "./component/Header/Header"
import Field from "./component/Field/Field"
import Footer from "./component/Footer/Footer"

class App extends React.Component {

  render(){
    return (
      <div id="program" className="wrapper">
        <Header />
        <Field />
        <Footer />
      </div>
    );
  }
  
}

export default App;
