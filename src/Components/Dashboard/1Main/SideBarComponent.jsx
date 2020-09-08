import React, { Component } from 'react';

class SideBarComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }

    }

    render() {
        return (
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href = "/dashboard">The Dashboard</a>
                    </li>
                    <li class = "nav-item dropdown">
   				        <a href="#pharmacyDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link dropdown-toggle">Pharmacy</a>
   				        <ul class="collapse list-unstyled" id="pharmacyDrop">
   					        <li> <a class = "dropdown-item" href="/pharmacy/manage-drug/add">Add New Drug</a> </li>
                            <li> <a class = "dropdown-item" href="/pharmacy/all-drugs">All Drugs</a> </li>
                            <li> <a class = "dropdown-item" href="#">View Payments</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#opdDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link dropdown-toggle">OPD</a>
   				        <ul class="collapse list-unstyled" id="opdDrop">
   					        <li> <a class = "dropdown-item" href="#">All Services</a> </li>
                            <li> <a class = "dropdown-item" href="#">Billing</a> </li>
                            <li> <a class = "dropdown-item" href="#">Payments</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#channelingDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link dropdown-toggle">Channeling Services</a>
   				        <ul class="collapse list-unstyled" id="channelingDrop">
   					        <li> <a class = "dropdown-item" href="#">New Booking</a> </li>
                            <li> <a class = "dropdown-item" href="#">All Bookings</a> </li>
                            <li> <a class = "dropdown-item" href="#">Billing</a> </li>
   				        </ul> 
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#labDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link dropdown-toggle">Laboratory</a>
   				        <ul class="collapse list-unstyled" id="labDrop">
   					        <li> <a class = "dropdown-item" href="#">New Lab Test</a> </li>
                            <li> <a class = "dropdown-item" href="#">All Lab Tests</a> </li>
                            <li> <a class = "dropdown-item" href="#">Billing</a> </li>
   				        </ul>
   			        </li>
                    <li class = "nav-item dropdown">
   				        <a href="#financeDrop" data-toggle="collapse" aria-expanded="false" class = "nav-link dropdown-toggle">Finance</a>
   				        <ul class="collapse list-unstyled" id="financeDrop">
   					        <li> <a class = "dropdown-item" href="/finance/add-utility">New Utility Payment</a> </li>
                            <li> <a class = "dropdown-item" href="/finance/all-utility">All Utility Payments</a> </li>
                            <li> <a class = "dropdown-item" href="/finance/utility-bill">Utility Report</a> </li>
   				        </ul>
   			        </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default SideBarComponent;