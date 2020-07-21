import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// Call back function that connects the same info from SearchBar
//Back up to the App component
// Axios 3rd party to fetch Api's 

class App extends React.Component {
   // empty array allows for array method to be use when 
   //referring  to the state object
    state = {images: []};
    onSearchSubmit = async (info) => {
      const response = await unsplash.get("search/photos", {
        // type of info we want shown from the Api 
        //(query is a parmas from the Api)
        //and we set it to whats being type by the user(info)
        params: { query: info },
        
       }); 
       this.setState({images:response.data.results});
    }
    //submit is a custom prop 
    //custom props are used when accessing a componet 
    render(){
        return (
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar submit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
  

export default App;

// Async sets up the function/method you want to run
// Await allows the info to we want returing to
// come back in a resoanble matter 
// handels errors easier (don't have to make promises)