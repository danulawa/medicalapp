import React, { Component } from 'react';
import EquipmentService from '../services/EquipmentService';

class ListEquipmentComponent extends Component {
    constructor(props){
        super(props)
            this.state ={
               equipment: []
            }
            this.addEquipment = this.addEquipment.bind(this);
            this.editEquipment = this.editEquipment.bind(this);
            this.deleteEquipment = this.deleteEquipment.bind(this);
            this.printDetails = this.printDetails.bind(this);
        }
    deleteEquipment(eqId){
        if (window.confirm('Are you sure you wish to delete this item?')) 
        
        EquipmentService.deleteEquipment(eqId).then( res =>{
            this.setState({equipment:this.state.equipment.filter(equipment => equipment.eqId !== eqId)});
        });
        else{
            return false;
         }
        
    }

    editEquipment(eqId){
        this.props.history.push(`/update-equipment/${eqId}`);
    }

    printDetails(eqId){
        this.props.history.push(`/print-details/${eqId}`)
    }
    componentDidMount(){
        EquipmentService.getEquipment().then((res) =>{
            this.setState({equipment:res.data});
        });
    }

    addEquipment(){
        this.props.history.push('/add-equipment');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">OPD Equipment List</h2>
                <div className = "row">
                    <div className="row1">
                        <button className="btn btb-primary" onClick={this.addEquipment}>Add Equipment</button>                
                    </div>
            </div>
            <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Equipment Name</th>
                            <th>Equipment Quantity</th>
                            <th>Equipment Storage</th>
                            <th>Equipment Trade Name</th>
                            <th>Equipment Unit Price</th>
                            <th>Equipment isuuedDate</th>
                            <th>Equipment ExpiryDate</th>
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.equipment.map(
                                    equipment =>
                                    <tr key = {equipment.eqId}>
                                        <td>{equipment.eqName}</td>
                                        <td>{equipment.equantity}</td>
                                        <td>{equipment.estorage}</td>
                                        <td>{equipment.etrade}</td>
                                        <td>{equipment.euprice}</td>
                                        <td>{equipment.e_IS_Date}</td>
                                        <td>{equipment.e_Ex_Date}</td>
                                        <td>
                                            <button onClick = { () => this.editEquipment(equipment.eqId)} className = "btn btn-success">Update</button>
                                            <button onClick = { () => this.deleteEquipment(equipment.eqId)} className = "btn btn-danger">Delete</button>
                                            <button onClick = { () => this.printDetails(equipment.eqId)}  >Print Bill</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEquipmentComponent;
