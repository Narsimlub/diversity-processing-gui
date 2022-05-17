import axios from "axios";

export default axios.create({
baseURL: "https://diversity-processing-service1.azurewebsites.net/",// "http://localhost:9000",
headers:{
    "Content-type":"application/json"
}
});