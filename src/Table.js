import React from 'react';
import DeleteIcon from './icons/delete-nfss.png'
import EditIcon from './icons/edit-nfss.png'
import InformationIcon from './icons/information.png'
import DisplayFileInfo from './modals/DisplayFileInformation'
import DeleteFile from './modals/DeleteFile'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTableData() {
       
        if(this.props.data == undefined || this.props.data == null)
            return (<h1>Error loading data</h1>)
        return this.props.data.map((element, index) => {
          
           return (
              <tr id={element.file_id} key={element.file_key}>
                 <td>{element.file_name}</td>
                 <td>
                     <DisplayFileInfo />
                 </td>
                 <td>
                     <img className="table-icon-info" src={EditIcon}></img>
                 </td>
                 <td>
                     <DeleteFile file_id={element.file_id}/>
                 </td>
              </tr>
           )
        })
     }

    render() {
        return (
            <div>
              
                <table className="nfss-table">
                    <tbody className="nfss-table-body">
                        <tr className="nfss-table-headers">
                            <th>Name</th>
                            <th>Info</th>
                            <th>Edit</th>
                            <th>Delete</th>                            
                        </tr>
                        
                        {this.renderTableData()}
                         
                    </tbody>
                </table>
            </div>
        )
    }
}

{/* class TableRow extends React.Component {
    render() {
        return (
            <tr className="nfss-table-row">
                <td>{this.props.name}</td>
                <td>{this.props.info}</td>
                <td>{this.props.edit}</td>
                <td>{this.props.delete}</td>
            </tr>)
    }
}; */}

export default Table
