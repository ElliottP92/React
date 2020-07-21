import axios from "axios"

// Creates a copy of axios fetch 
export default axios.create({
baseURL:"https://api.unsplash.com/",
// Main access to info from the APi
headers: {
    Authorization: "Client-ID lQFB4LCT6pMtkvCDVFpQmDEg8op24srWSxgsPqoEccQ"
}
});