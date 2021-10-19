import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../style.css'
import axios from'axios'
class ExampleApp extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        message: "",
        forminput : {
          first_name : "",
          last_name : "",
          email : "",
          password: ""
        }        
      };

      this.form_input = [
        "First Name" ,
        "Last Name",
        "Email",
        "Password"
    ]
      this.handleChange = this.handleChange.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleUserCreation = this.handleUserCreation.bind(this);
    }
    handleChange(event) {
      var curr_val = this.state.forminput
      switch(event.target.id) {
          case "first_name":
              curr_val.first_name = event.target.value
             
            break;
            case "last_name":
              curr_val.last_name = event.target.value
            break;
            case "email":
              curr_val.email = event.target.value
            break;
            case "password":
              curr_val.password = event.target.value
            break;
          
        }
        this.setState({forminput : curr_val})
      //this.setState({value: event.target.value});
    }
  
  async handleSubmit(event) {
      
      return await axios.post('https://jsonplaceholder.typicode.com/posts', this.state.forminput,
          {headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
          .then((response) => 
          {
              if(response.status ===201)
              {
                console.log(this.state.forminput)
                  return "User successfully created"
              }
              else{
                  return "Cannot create the user"
              }
          })
          .catch((json) => "Error while creating user" + json);
      }
    async handleUserCreation(e){
     
      e.preventDefault();
      let messageOutput = await this.handleSubmit()
      this.setState({message : messageOutput }) 

    }
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal (e) {

      this.setState({ showModal: false, message : "" });
    }
    
    render () {
     
      return (
        <div>
          <button className= "nfss-login-buttons" onClick={this.handleOpenModal}>Sign Up</button>
          <Modal 
             isOpen={this.state.showModal}             
             id = "nfss-signup-user"
             className="nfss-modal"
             overlayClassName="Overlay"
          >
             <div >
                 <div className='nfss-modal-title'> Create New User </div>
                 <div className='nfss-modal-body'>               
                 {
                      this.items =  this.form_input.map((element, index) => {
                          var id = element.replace(' ','_').toLowerCase()
                          return (
                              <div id="nfss-modal-information-container">
                                <div className="nfss-modal-label">
                                  {element}  
                                </div> 
                                <input className="nfss-modal-value" id={id} value={this.state[id]} onChange={this.handleChange} />                         
                              </div>
                          )
                        
                       })
                 }
            </div>
            <div className='modal-output-message'>{this.state.message}</div>
            <div className = 'modal-footer'>
            <button className= 'nfss-modal-button' onClick={this.handleUserCreation}>Create</button>
            <button className= 'nfss-modal-button' onClick={this.handleCloseModal}>Close</button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default ExampleApp;