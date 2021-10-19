
import React, { useState } from 'react';
import Login from './modals/Login'
import Table from './Table';
import CreateUser from './modals/CreateAUser';
import RefreshIcon from './icons/refresh-nfss.png'
import AddIcon from './icons/add-nfss.png'
import axios from 'axios'
import UploadFile from './UploadFile';
class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
     
      token : "",
      data: [{"userId" :90}]
     
      }        
    
     
      this.handleRefresh = this.handleRefresh.bind(this)
     this.handleChange = this.handleChange.bind(this);
   this.handleFileUpload = this.handleFileUpload(this);
 
  }
 handleFileUpload(e){
   console.log(e)
 }
  handleRefresh(e){
    alert("handle refresh")
    axios.get('https://jsonplaceholder.typicode.com/posts',
    {headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization' : ""
    }
  })
    .then((response) => 
    {
        if(response.status ===200)
        {
            console.log(response)
            window.localStorage.setItem('filesData', response.data);
            window.localStorage.setItem("token", "")
          this.setState({data: response.data})
        }
        else{
            return "Cannot create the user"
        }
    })
    .catch((json) => "Error while creating user" + json);
 
  }
  handleChange(e){
console.log(e)

this.setState({token : e})
this.handleRefresh(e)

  }
  render () {
     if(this.state.token === "")
     {

      return (
        <div className="nfss-login-button-container">
        <CreateUser />
        <Login onChangeToken={this.handleChange}> </Login>
      </div>)
     }
    return (
    <div>
      <div className='nfss-avtar-container'>
        <UploadFile />
     
      {/* <div class="nfsss-image-upload">
        <label for="file-input">
          <img  className='nfss-addfile-icon' src={AddIcon}/>
        </label>
        <input id="nfss-file-input" type="file"/>
      </div> */}
       
  <img onClick={this.handleRefresh} className="refresh-icon" src={RefreshIcon} />
   <button className="nfss-user-avtar">NA</button>
   </div>
   <Table data={this.state.data}></Table>)
   </div>
    )
  }
}
export default App;

