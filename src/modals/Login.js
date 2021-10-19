import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../style.css'
import axios from'axios'
class LoginUser extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        message: "",
        forminput : {
          
          email : "",
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
      var curr_val = this.state.forminput
      switch(event.target.id) {          
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
    async handleUserLogin(callback){
     
    //  e.preventDefault();
    //   let messageOutput = await this.handleSubmit()
    //   this.setState({message : messageOutput }) 
        callback("netra");
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