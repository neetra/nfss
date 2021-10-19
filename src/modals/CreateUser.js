// import React from 'react';
// import RootModal from './RootModal';
// import axios from 'axios'



// class CreateUser extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//           showModal: false,
//           message : "",
//           forminput : {
//             first_name : "",
//             last_name : "",
//             email : "",
//             password: ""
//           }        

//         }; 
        
//         this.signupbutton = 

//             {
//                 "name" : "Sign Up",
//                  "id" : "sign-up",
//                  "url" : "",
//                  "http-method" :""
//             }       
        
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);    
//     this.form_input = [
//            "First Name" ,
//            "Last Name",
//            "Email",
//            "Password"
//        ]
//       }
//     handleChange(event) {
//         var curr_val = this.state.forminput
//         switch(event.target.id) {
//             case "first_name":
//                 curr_val.first_name = event.target.value
               
//               break;
//               case "last_name":
//                 curr_val.last_name = event.target.value
//               break;
//               case "email":
//                 curr_val.email = event.target.value
//               break;
//               case "password":
//                 curr_val.password = event.target.value
//               break;
            
//           }
//           this.setState({forminput : curr_val})
//         //this.setState({value: event.target.value});
//       }
    
//     async handleSubmit(event) {
//         //event.preventDefault();
//         return await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//               title: 'foo',
//               body: 'bar',
//               userId: 1,
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           })
//             .then((response) => 
//             {
//                 if(response.status ===201)
//                 {
//                     return "User successfully created"
//                 }
//                 else{
//                     return "Cannot create the user"
//                 }
//             })
//             .catch((json) => "Error while creating user" + json);
//         }
//       render () {
//         return (
//           <RootModal button={this.signupbutton}  onsignup = {this.handleSubmit} title = "Create New User" id="create-user-modal">              
            

//           </RootModal>
//         );
//       }  
// }



// export default CreateUser;
