import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import  '../style.css'
import axios from'axios'
import InfoIcon from '../icons/information.png'

class DisplayFileInformation extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        data: {}
        }    
      
      this.download_link_key = "download_link"
      this.form_input = {
        "file_name" : "Name",
        "file_description":"Description",
        "file_created_at" : "Created At",
        "file_modified_at" : "Modified At",
        "user_email" : "Email",
        "user_first_name" : "First Name",
        "user_last_name" : "Last Name"

    
      }
   
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.getFileInformation = this.getFileInformation.bind(this);
      
    }
   
 
  getFileInformation(event) {
      let file_id =  event.target.parentNode.parentNode.parentNode.id
      console.log(file_id)
       let data = window.localStorage.getItem("filesData")
       let arr = JSON.parse(data)
       let fileDetails = arr.find(n=> n.file_id === parseInt(file_id))
       console.log(fileDetails)
       this.setState({data : fileDetails}) 
      }
    
    handleOpenModal (e) {
        this.setState({ showModal: true });
    this.getFileInformation(e)
     
    }
    
    handleCloseModal (e) {

      this.setState({ showModal: false, message : "" });
    }
    
    
    render () {
        let items = [];
        console.log(this.state.data)
        let properties = Object.getOwnPropertyNames(this.state.data)
        for(let element in properties)
        {
            element = properties[element]
            let label = this.form_input[element]
            if(label !== undefined)
            {
            let value=  this.state.data[element]
            console.log(label + value)
            let item = <div id='nfss-modal-information-container'><div className="nfss-modal-label">{label + " : "}</div><div className="nfss-modal-value"> {value}</div> </div>
            items.push(item);
            }
        }
      return (
       
        <div>
          <img className="table-icon-info" src={InfoIcon} onClick={this.handleOpenModal}></img>
          <Modal 
             isOpen={this.state.showModal}
             id = "nfss-login-modal"
             className="nfss-modal"
             overlayClassName="Overlay"
          >
             <div>
                 <div  className='nfss-modal-title'>File Information</div>
                 <div className='nfss-modal-body'>               
                {items}
            </div>           
            <div className = 'modal-footer'>           
            <button className='nfss-modal-button' onClick={this.handleCloseModal}>Close</button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default DisplayFileInformation;