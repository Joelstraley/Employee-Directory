import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50";


export default {
  populate: function() {
    return axios.get(BASEURL + "results=50");
  },
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};