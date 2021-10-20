import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import  '../style.css'
import axios from'axios'
import DelIcon from '../icons/delete-nfss.png'
import Constants from '../Constants';

class DeleteFile extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        data: {}
        }    
      
     
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      
    }
   
 
  handleDelete(event) {
     let file_id =  event.target.id
      
      let data = window.localStorage.getItem("filesData")
       let arr = JSON.parse(data)
       let fileDetails = arr.find(n=> n.file_id === parseInt(file_id))

      let url = Constants.BASEURL + "/file/" + fileDetails.file_key
     //Delete 
     axios.delete(url,
      {headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization' : window.localStorage.getItem("token")
      }
    })
      .then((response) => 
      {
          if(response.status ===200)
          {
              console.log("File Deleted")
          }
          else{
              return "Cannot create the user"
          }
      })
      .catch((json) => "Error while creating user" + json);
      this.handleCloseModal(event)
      }
    
    handleOpenModal (e) {
        this.setState({ showModal: true });

     
    }
    
    handleCloseModal (e) {

      this.setState({ showModal: false, message : "" });
    }
    
    
    render () {
       
       
      return (
       
        <div>
          <img className="table-icon-del" id={this.props.file_id} src={DelIcon} onClick={this.handleOpenModal}></img>
          <Modal 
             isOpen={this.state.showModal}
             id = "nfss-table-icon-del-modal"
             className="nfss-modal"
             overlayClassName="Overlay"
          >
             <div>
                 <div  className='nfss-modal-title'>Delete</div>
                 <div className='nfss-modal-body'>               
                Do you want to delete file ?
            </div>           
            <div className = 'modal-footer'>           
            <button className='nfss-modal-button' id={this.props.file_id} onClick={ this.handleDelete}>Delete</button>
            <button className='nfss-modal-button' onClick={this.handleCloseModal}>Close</button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default DeleteFile;