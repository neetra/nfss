import axios from 'axios';
import React,{Component} from 'react'; 
import AddIcon from './icons/add-nfss.png'
import baseURL from  './config'; 
class UploadFile extends Component { 
    constructor () {
        super();
        this.state = {
         
          token : "",
          data: [{"userId" :90}]
         
          }        
        this.onFileChange = this.onFileChange.bind(this)
    
      }
   
     
    // On file select (from the pop up) 
    onFileChange(event) { 
       
        console.log(event.target.files)
        if(event.target.files !== undefined  && event.target.files.length > 0)
        {
      // Update the state 
      if(event.target.files[0].size > 10485760)
       { alert("Max size of file to upload is 10Mb.Size of file is " +event.target.files[0].size + " bytes")
        }
      else{
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzQ2MjU2NzMsImlhdCI6MTYzNDYyNTM3MywibmJmIjoxNjM0NjI1MzczLCJ1c2VyX2lkIjo0LCJyb2xlX2lkIjoyLCJmaXJzdF9uYW1lIjoidGVzdHVzZXIzIiwibGFzdF9uYW1lIjoiZGV2ZWxvcGVtZW50IiwiZW1haWwiOiJhbXJhbGUubmV0cmErM0BnbWFpbC5jb20iLCJzZXJ2aWNlIjoibmZzcyJ9.QFiVJM6UPRnueUtu_GvFoZ2nbGpd4Cf6rtJ6KkOo5fY"
        let formData = new FormData();           
        formData.append("file_key", event.target.files[0]);
        axios.post(baseURL + "/file", formData, {

        "headers" :{
            "Authorization" : "JWT " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzQ2MjU2NzMsImlhdCI6MTYzNDYyNTM3MywibmJmIjoxNjM0NjI1MzczLCJ1c2VyX2lkIjo0LCJyb2xlX2lkIjoyLCJmaXJzdF9uYW1lIjoidGVzdHVzZXIzIiwibGFzdF9uYW1lIjoiZGV2ZWxvcGVtZW50IiwiZW1haWwiOiJhbXJhbGUubmV0cmErM0BnbWFpbC5jb20iLCJzZXJ2aWNlIjoibmZzcyJ9.QFiVJM6UPRnueUtu_GvFoZ2nbGpd4Cf6rtJ6KkOo5fY"
        }
        }).then( resp => {

            console.log(resp.data)
            alert('The file has been uploaded successfully.');
        }).catch(err => {

            console.error(err)
        });    
       
      }  
    }    
     
    }; 
     
   
     
  
    render() { 
      return ( 
     

        <div> 
            <label for="nfss-file-upload" class="btn">
            <img  for="nfss-file-upload"  className='nfss-addfile-icon' src={AddIcon}/>
            </label>
            <input className="nfss-file-input"  id="nfss-file-upload" type="file" onChange={this.onFileChange} /> 
        
    </div> 
        
        
      ); 
    } 
  } 
  
  export default UploadFile; 