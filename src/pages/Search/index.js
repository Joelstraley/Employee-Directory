import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";


  // When the component mounts, get a list of all available base breeds and update this.state.breeds
 /*  async componentDidMount() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ employee: data.results[0]});
      console.log(data.results[0]);
  } */

/*   function Search() {
    const [query, setSearch] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

  
    useEffect(() => {
      if (!query) {
        return;
      } if (query) { */

class Search extends Component {
  state = {
    search: "", 
    image: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    results: [],
    error: "" 
  }

  componentDidMount() {
        API.search()
          .then(res => this.setState({ name: res.results.name }))
        
          .catch(err => console.log(err));
      }
          
  
/*   handleInputChange = event => {
        this.setState({ search: event.target.value });
      }; */

  render(){
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For an Employee</h1>
        {/*   { <SearchForm
             handleInputChange={handleInputChange} 
             results={query}
          />  } */}
          <SearchResults />
        </Container>
      </div>
    );
  }
};

  export default Search;

