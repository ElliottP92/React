import React from "react";

// class based componetes 
// images being shown on screen after being searched
// refs give acces to a signle DOM element 
class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }
    // Functions aboveRender will be call at the start and thats it(one-time thing)
    // lifecycle methods (built-in methods) helps with the flow of React
    // Allows the images to b equally sized
    componentDidMount(){
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    // set the span elemnts for the pics
    setSpans =() => {
        const height =this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 + 1);

        this.setState({spans})
    }

    render() {
        // Destructing 
        // Refers from the image list (this.props.image)
        // ref bulit in prop for the DOM
        const {description, urls} = this.props.image;
        return ( 
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }      
}
// Allows the imageList to have acess
export default ImageCard;