
import React, { useState } from 'react';
import Login from './modals/Login'
import Table from './Table';
import CreateUser from './modals/CreateAUser';
import RefreshIcon from './icons/refresh-nfss.png'
import AddIcon from './icons/add-nfss.png'
import axios from 'axios'
import UploadFile from './UploadFile';
import Constants from './Constants';
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
    let url = Constants.BASEURL + "/files"
    axios.get(url,
    {headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization' : window.localStorage.getItem("token")
    }
  })
    .then((response) => 
    {
        if(response.status ===200)
        {
            console.log(response)
            let allFiles  = response.data["Files"]
            let jsonstring = JSON.stringify(allFiles)
            window.localStorage.setItem('filesData', jsonstring);           
          this.setState({data: allFiles})
        }
        else{
            return "Cannot create the user"
        }
    })
    .catch((json) => "Error while creating user" + json);
 
  }
  handleChange(e){

window.localStorage.setItem("token", e)
this.setState({token : e})
this.handleRefresh(e)

  }
  render () {
     let token  = window.localStorage.getItem("token")
     if(token === undefined || token === null ||token === "")
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

