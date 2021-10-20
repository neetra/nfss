import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../style.css'
import axios from'axios'
import Constants from '../Constants'

class LoginUser extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        message: "",
        formInput : {          
          username : "",
          password: ""
        }        
      };

      this.form_input = [        
        "Email",
        "Password"
    ]
      this.handleChange = this.handleChange.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleUserLogin = this.handleUserLogin.bind(this);
    }
    handleChange(event) {
      var curr_val = this.state.formInput
      switch(event.target.id) {          
            case "email":
              curr_val.username = event.target.value
            break;
            case "password":
              curr_val.password = event.target.value
            break;
          
        }
        this.setState({formInput : curr_val})
      
    }  
 
     handleUserLogin(callback){
      var url = Constants.BASEURL
       axios.post(url+'/auth', this.state.formInput,
      {
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((response) => 
      {
          if(response.status ===200)
          {
            let at= Constants.JSON["ACCESSTOKEN"]
            console.log(response.data[at])
            let token = "JWT " + response.data[at]
            console.log(token)
            callback(token);
              console.log( "User login created")
          }
          else{
              console.log("Cannot login the user")
              
          }
      })
      .catch((json) => "Error while logging user" + json); 
        
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
          <button className="nfss-login-buttons" onClick={this.handleOpenModal}>Login</button>
          <Modal 
             isOpen={this.state.showModal}            
             id = "nfss-login-modal"
             className="nfss-modal"
             overlayClassName="Overlay"
          >
             <div>
                 <div className='nfss-modal-title'>Login</div>
                 <div className='nfss-modal-body'>               
                 {
                      this.items =  this.form_input.map((element, index) => {
                          var id = element.replace(' ','_').toLowerCase()
                          return (
                            <div id="nfss-modal-information-container">
                            <div className="nfss-modal-label">
                                {element}   
                                </div>
                                <input className="nfss-modal-value" id={id} value={this.state[id]} onChange={this.handleChange}>
                                </input>                       
                            </div>
                          )                        
                       })
                                        }
            </div>
            <div className='modal-output-message'>{this.state.message}</div>
            <div className = 'modal-footer'>
            <button className= 'nfss-modal-button' onClick={() => this.handleUserLogin(this.props.onChangeToken)}>Login</button>
            <button className= 'nfss-modal-button' onClick={this.handleCloseModal}>Close</button>
            </div>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default LoginUser;