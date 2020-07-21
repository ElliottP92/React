import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

// Class based Componet
// React.Component allows us to get methods for our class componet
// anytime a new instance is created in App it will be called first
// Good for init the state and super is refering to React.Component
class App extends React.Component {
  // state object (updates whats insde the componet)
  state = { lat: null, errorMessage: ""};



// Functions aboveRender will be call at the start and thats it(one-time thing)
// lifecycle methods (built-in methods) helps with the flow of React
// Best Practice to have data in these methods 
componentDidMount(){
   // geolocation API already in your browser 
   window.navigator.geolocation.getCurrentPosition(
     // updates the this.state aboject automatically (required by React)
     //setState is a lifecyle method in sense same as (componentDidUpdate)
    position => this.setState({ lat: position.coords.latitude}),
    err => this.setState({ errorMessage: err.message })
  );
};

// Helper function works well with Conditional Rendering
renderContent() {
  if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>;
  }
  if (!this.state.errorMessage && this.state.lat) {
    // SeasonDisplay component 
    // You can take state from one component and pass it as a property down to the child
      return <SeasonDisplay lat={this.state.lat} />
  }
  return <Loader message="Allow location to use app" />;
}


  // render is a required built in method from (React.Component) 
  render(){
   return(
     <div className="border red">
       {this.renderContent()}
     </div>
   );
  };


}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

