import React, { Component } from "react";
import jwtDecode from "jwt-decode"
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import {Link} from "react-router-dom"
import {  deleteMember, getMembers } from "../services/memberService";
import { getCatogeries } from "../services/catogeryService";
import { paginate } from "../utils/paginate";
import {MdVerified} from "react-icons/md"

class Family extends Component {
  state = {
    members: [],
    catogeries: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    selectedGenre: null,
  };

async componentDidMount() {
  const {data} = await getCatogeries();
  const {data:members} = await getMembers()
  const catogeries = [{ _id: "", name: "All Catogerie" }, ...data];
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({ user });
  } catch (ex) {}
  this.setState({ members, catogeries:catogeries });
  }
  handleDelete = async (member) => {
    const originalMembers = this.state.members;
    const members = originalMembers.filter(m => m._id !== member._id)
    this.setState({members})
    if(!this.state.user.isAdmin){
      return alert("You are not The Admin to delete the member");
    }
    try{
      await deleteMember(member._id)
    }
    catch(ex){
      if(ex.response&& ex.response.status===404){
        return alert("This member had already been deleted")
      }
    }
  };
  
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleCatogerySelect = (catogery) => {
    this.setState({ selectedCatogery: catogery, currentPage:1 });
  };
  render() {
    const allMembers = this.state.members;
    const filtered =
      this.state.selectedCatogery && this.state.selectedCatogery._id
        ? allMembers.filter(
            (m) => m.catogery._id === this.state.selectedCatogery._id
          )
        : allMembers;
    const members = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
          currentPage={this.state.currentPage}
            selectedCatogery={this.state.selectedCatogery}
            catogeries={this.state.catogeries}
            onCatogerySelect={this.handleCatogerySelect}
          />
        </div>
        <div className="col container" style={{fontSize:16}}>
          <p style={{fontSize:18, color:"#b8df10"}}>Currently There are {this.state.members.length} Family Members. </p>
          <table className="table">
            <thead>
              <tr style={{color:"#ffb500"}}>
                <th>Name</th>
                <th>age</th>
                <th>Gender</th>
                <th>catogery</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member._id}>
                  <td><Link to={"/family/"+member._id} style={{textDecoration:"none"}}>{member.name}<MdVerified color="dodgerblue" size={25}/></Link></td>
                  <td>{member.age}</td>
                  <td>{member.gender}</td>
                  <td>{member.catogery.name}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(member)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            itemsCount={filtered.length}
          />
        </div>
      </div>
    );
  }
}

export default Family;
