import React, { Component } from 'react';
import EquipmentService from '../../../Services/EquipmentService';

class UpdateEquipmentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            eqId:this.props.match.params.eqId,
            eqName: '',
            euprice: '',
            equantity: '',
            e_IS_Date:'',
            e_Ex_Date:'',
            etrade:'',
            estorage:''
        }
           
            this.changeNamehandler = this.changeNamehandler.bind(this);
            this.changePricehandler = this.changePricehandler.bind(this);
            this.changeQuantityhandler = this.changeQuantityhandler.bind(this);
            this.changeStoragehandler = this.changeStoragehandler.bind(this);
            this.changeBrandhandler = this.changeBrandhandler.bind(this);
            this.changeISDatehandler = this.changeISDatehandler.bind(this);
            this.changeExDatehandler = this.changeExDatehandler.bind(this);
            this.updateEquipment = this.updateEquipment.bind(this);
      }       
  
      componentDidMount(){
          EquipmentService.getEquipmentById(this.state.eqId).then( (res) =>{
              let equipment = res.data;
              this.setState({eqName:equipment.eqName,estorage:equipment.estorage,
                euprice:equipment.euprice,equantity:equipment.equantity,etrade:equipment.etrade,
                e_IS_Date:equipment.e_IS_Date,e_Ex_Date:equipment.e_Ex_Date});
          });
      }

      updateEquipment = (e) => {
        e.preventDefault();
       
        let equipment ={eqName:this.state.eqName,estorage:this.state.estorage,euprice:this.state.euprice,equantity:this.state.equantity,etrade:this.state.etrade,e_IS_Date:this.state.e_IS_Date,e_Ex_Date:this.state.e_Ex_Date}
        console.log('equipment => ' +JSON.stringify(equipment));
      
        EquipmentService.updateEquipment(equipment, this.state.eqId).then(res =>{
            this.props.history.push('/opd/equipment');
        });
      }
      changeNamehandler = (event) => {

          this.setState({eqName: event.target.value});

      }
    
      changeStoragehandler = (event) =>{
          this.setState({estorage: event.target.value});
      }

      changePricehandler = (event) =>{
          this.setState({euprice: event.target.value});

      }

      changeQuantityhandler = (event) =>{
          this.setState({equantity :event.target.value});
      }
      changeBrandhandler = (event) =>{
          this.setState({etrade: event.target.value});
      }

      changeISDatehandler = (event) =>{
          this.setState({e_IS_Date: event.target.value});
      }

      changeExDatehandler = (event) =>{
          this.setState({e_Ex_Date: event.target.value});
      }

  render() {
  return(
    <div className="container" style={{backgroundColor: "#e9fcf4"}}>
      <div className="row">
      <div className = "card col-md-6 offset-md-3">
      <div className="text-center">
        <img src = {require('./logoA.jpg')} width="72" height="72" alt="logo" />
      </div>
      <h1 className="text-center">Update OPD Equipment</h1>
      <div className = "card-body">
        <form >
        <div className = "form-group">
          <label>Item Name :</label><br/>
          <input 
            type="text" 
            value={this.state.eqName} 
            name="eqName" 
            placeholder="Item Name"
            onChange={this.changeNamehandler}
            required
            noValidate
          />
          </div>
          <div className = "form-group">
          
          <label>Storage :</label><br/>
          <input 
            type="text" 
            value={this.state.estorage} 
            name="estorage" 
            placeholder="estorage"
            onChange={this.changeStoragehandler}
            noValidate
          />
          </div>
          <div className = "form-group">
        <label>Unit price</label><br/>
        <input 
          type="text" 
          pattern="[0-9]*"
          value={this.state.euprice} 
          name="euprice"
          placeholder="Price" 
          onChange={this.changePricehandler}
        />
      </div>
      <div className = "form-group">
        <label>Quantity :</label><br/>
        <input 
           type="number" 
          value={this.state.equantity} 
          name="equantity"
          placeholder="Quantity" 
          onChange={this.changeQuantityhandler}
        />
        
      </div>
      <div className = "form-group">
        <label>Brand :</label><br/>
        <input 
          type="text" 
          value={this.state.etrade} 
          name="etrade"
          placeholder="Brand" 
          onChange={this.changeBrandhandler}
        />
       </div> 
       <div className = "form-group">
            <br></br>
            <h5 >Date details</h5>
          <label>Received Date :</label>
          <input 
            type="Date" 
            value={this.state.e_IS_Date} 
            name="e_IS_Date" 
            placeholder="Date " 
            onChange={this.changeISDatehandler}
          />
      </div>
      <div className = "form-group">
          <label>Expiration Date :</label>
          <input 
            type="date" 
            value={this.state.e_Ex_Date} 
            name="e_Ex_Date" 
            placeholder="Expiration Date " 
            onChange={this.changeExDatehandler}
          />
      </div>
        <br></br>
      
        <button type="Submit" className="btn btn-success" onClick={this.updateEquipment} >Submit</button>
      
        </form>
        </div>
      </div>
      </div>
    </div>
    
  )
 }
}

export default UpdateEquipmentComponent;