import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

// Map method iterates over an array
// Key propety helps React identify a list of elements 
// How the images are listed on the page
// props as a parmater refers back to parent componet (App)
const ImageList = (props) => {
   const images = props.images.map(image => {
       // ImageCard component and custom image prop
        return <ImageCard key={image.id} image={image}/>;
    });
return <div className="image-list">{images}</div>;
}

// Allows the App (parent componet) to have acess
export default ImageList;