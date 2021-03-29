import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
/* import Title from "../../components/Title"; */
import SearchForm from "../../components/SearchForm";
import Table from "../../components/Table"
import TableHeader from "../../components/TableHeader"
import TableBody from "../../components/TableBody";


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
    img: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    employees: [],

    error: "" 
  } 
 /*  constructor(){
    super();
    this.state = {
      name="",
      employees: []}
  } */

 componentDidMount() {
      fetch("https://randomuser.me/api/?results=50&nat=us")
      .then(response => response.json())
      .then( ({results: employees}) => this.setState({employees}))
   
    
  } 
       /*  API.search()
          .then(res => console.log(res),
          this.setState({ name: res.results.name }))
          .catch(err => console.log(err));
      } */
          
  
/*   handleInputChange = event => {
        this.setState({ search: event.target.value });
      }; */
filter(e){
  this.setState({filter: e.target.value})
}
  render(){
    let employees = this.state.employees;
      if(this.state.filter){
      employees = employees.filter( employee =>
        employee.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
      };

    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For an Employee</h1>
          <SearchForm onChange={this.filter.bind(this)} />
          <Table  />
          {employees.map(employee=> 
          <TableBody img={employee.picture.thumbnail} 
                     name={employee.name.first + " " + employee.name.last} 
                     address={employee.location.street.number + " " + employee.location.street.name}
                     phone={employee.phone}
                     email={employee.email}/>)}
{/*           <TableBody {employees.map(employee => <td>{employee.name}</td>)}/>
 */}        {/*   { <SearchForm
             handleInputChange={handleInputChange} 
             results={query}
          />  } */}
   
      
        </Container>
      </div>
    );
  }
};

  export default Search;

