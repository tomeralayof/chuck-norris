
import {apiUrl} from "./config.json";
import axios from "axios";

 async function getCategories() {
       const { data }  = await axios.get(`${apiUrl}/categories`);
       return data;
  }

  function randomOptions(obj) {
    const { name,category } = obj;

     if(category!=="" && name!=="") {
    return axios.get(`${apiUrl}/random?name=${name}&category=${category}`);
    }

    else if(category!=="" && name === "") {
     return axios.get(`${apiUrl}/random?category=${category}`);
    }
    else if(category===""&& name!==""){
     return axios.get(`${apiUrl}/random?name=${name}`);
    }
  }
  
const random = {
  getCategories,
  randomOptions,
}

export default random;