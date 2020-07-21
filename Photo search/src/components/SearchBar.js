import React from "react";

// Class Based Componets are good for the state

class SearchBar extends React.Component {
  // Allows for the searchbar to be controlled 
  // Means that React stores the info rather than HTML
  // You can access Js event object in React with (event/e)
 state = { term: ""}

 // stops the page from reloading on submit (key for working in React)
 // and stores the info and allows that info to be accees right
onFormSubmit = (event) => {
    event.preventDefault();

// refers back to the custom prop back in App 
// props used in class based needs to be access by this.prop
// in this case then refers back to the current state
    this.props.submit(this.state.term)
}



// functions before render get uses once
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;

// Certain HTLM/JSX elements work with these bulit in props
// onChange built in prop (event listener) User changes text in an input
// onClick  built in prop (event listener) User clicks on something
// onSubmit built in prop (event listener) User submits a form
//These bulit in prop passes a function reference from an ancestor to the 
//child so you can run it in the child   

// When evr you want to find out what the mean of this is 
// inside of a mtod on a class you look at where you called the method
// then look to the left on the dot notaion

// Arrow fucntion automatically bind this in the fuction its using/or nested in