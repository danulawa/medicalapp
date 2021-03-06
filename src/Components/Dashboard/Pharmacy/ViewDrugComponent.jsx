import React, { Component } from 'react';
import DrugService from '../../../Services/DrugService';

class ViewDrugComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

            drugId: this.props.match.params.drugId,
            drug: {}
        }

        this.backAllDrugs = this.backAllDrugs.bind(this);

    }

    componentDidMount(){
        DrugService.getDrugById(this.state.drugId).then((res) => {
            this.setState({drug: res.data});
        })
    }

    backAllDrugs(){
        this.props.history.push('/pharmacy/all-drugs');
    }

    getSupplier(){
        if(this.state.drug.supplierId == 1){return <h5>Lanka Drugs</h5>}
        if(this.state.drug.supplierId == 2){return <h5>Hemas</h5>}
        if(this.state.drug.supplierId == 3){return <h5>Durdens</h5>}
    }

    getDepartment(){
        let dep = this.state.drug.department
        if(dep == 1){return <h5>Pharmacy</h5>}
        if(dep == 2){return <h5>OPD</h5>}
        if(dep == 3){return <h5>Channeling Centre</h5>}
        if(dep == 4){return <h5>Laboratory</h5>}
    }

    render() {
        return (
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 class="h2">Pharmacy - View Drug</h1>
                </div>
                <br/>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.backAllDrugs}>Back All Drugs</button>
                </div>
                <br/>
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Generic Name</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.genericName}</h5>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Trade Name</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.tradeName}</h5>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Unit Price</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.unitPrice}</h5>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Quantity</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.quantity}</h5>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Storage Location</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.storageLocation}</h5>
                        </div>
                    </div>
                </div>
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Department</h5>
                        </div>
                        <div class="card-body">
                        {this.getDepartment()}
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Supplier</h5>
                        </div>
                        <div class="card-body">
                            {this.getSupplier()}
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Buffer Stock</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.bufferStock}</h5>
                        </div>
                    </div>
                </div>
                <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Manufacture Date</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.manuDate}</h5>
                        </div>
                    </div>
                    <div class="card mb-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="my-0 font-weight-normal" style = {{color: "#1cbe7b"}}>Expiry Date</h5>
                        </div>
                        <div class="card-body">
                            <h5>{this.state.drug.expDate}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewDrugComponent;