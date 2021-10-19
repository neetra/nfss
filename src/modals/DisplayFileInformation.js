import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import  '../style.css'
import axios from'axios'
import InfoIcon from '../icons/information.png'

class ExampleApp extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        data: {}
        }    
      
      this.download_link_key = "download_link"
      this.form_input = {
        "userId" : "user Id",
        "id":"id",
        "title" : "Title",
        "body" : "body"
    
      }
   
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.getFileInformation = this.getFileInformation.bind(this);
      
    }
   
 
  getFileInformation(event) {
      let file_key =  event.target.parentNode.parentNode.parentNode.id
       axios.get('https://jsonplaceholder.typicode.com/posts/7',
          {headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
          .then((response) => 
          {
              if(response.status ===200)
              {
                  console.log(response)
                this.setState({data: response.data})
              }
              else{
                  return "Cannot create the user"
              }
          })
          .catch((json) => "Error while creating user" + json);
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

export default ExampleApp;