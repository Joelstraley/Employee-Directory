import axios from "axios";


/* populate: function() {
  return axios.get(BASEURL + "?results=50");
},
 */
export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }
};