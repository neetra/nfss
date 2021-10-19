import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import  '../style.css'
import axios from'axios'
import DelIcon from '../icons/delete-nfss.png'

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
   
 
  handleDelete(event, callback) {
      let file_key =  event.target.parentNode.parentNode.parentNode.id
     //Delete 

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
          <img className="table-icon-del" src={DelIcon} onClick={this.handleOpenModal}></img>
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
            <button className='nfss-modal-button' onClick={(func) => {this.handleDelete(func)}}>Delete</button>
            <button className='nfss-modal-button' onClick={this.handleCloseModal}>Close</button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default DeleteFile;