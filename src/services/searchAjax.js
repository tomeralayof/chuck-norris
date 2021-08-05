import {apiUrl} from "./config.json";
import axios from "axios";
import dayjs from "dayjs";

async function freeText(text) {
  let data = axios.get(`${apiUrl}/search?query=${text}`);
   return data;
 }

 //helper function to convert date string pattern
 function reverseDate(res) {
  let data = res;
  let day = dayjs(data);
  let am_pm = "";  
  let dict = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  day.$H >= 0 && day.$H <= 12 ? (am_pm = "AM") : (am_pm = "PM");
  let numericMonth = day.$M;
  let month = "";

  for (numericMonth in dict) {
    month = dict[numericMonth] || "";
  }

  let result = `${month} ${day.$D},${day.$y} ${day.$H}:${day.$m} ${am_pm}`;
  return result;
}

const search = {
  freeText,
  reverseDate,
}
export default search;