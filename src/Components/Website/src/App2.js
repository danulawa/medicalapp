import React from 'react';
import axios from "axios";


class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      id: 0,
      name: '',
      email: '',
      phone: '',
      illness: '',
      doctor: '',
      date: ''
    }

  }
  componentDidMount() {
    axios.get("http://localhost:8080/patients/")
      .then((res) => {
        this.setState({
          patients: res.data,
          id: 0,
          name: '',
          email: '',
          phone: '',
          illness: '',
          doctor: '',
          date: ''
        })
      })
  }
  submit(event, id) {
    event.preventDefault();
    if (id === 0) {
      axios.post("http://localhost:8080/patients/", {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        illness: this.state.illness,
        doctor: this.state.doctor,
        date: this.state.date
      })
        .then((res) => {
          this.componentDidMount();
        })
    } else {
      axios.put("http://localhost:8080/patients/", {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        illness: this.state.illness,
        doctor: this.state.doctor,
        date: this.state.date
      }).then(() => {
        this.componentDidMount();
      })

    }

  }
  delete(id) {
    axios.delete(`http://localhost:8080/patients/${id}`)
      .then(() => {
        this.componentDidMount();
      })
  }
  edit(id) {
    axios.get(`http://localhost:8080/patients/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          illness: res.data.illness,
          doctor: res.data.doctor,
          date: res.data.date
        })
      })
  }
  render() {
    return (
      <div className="container" >

        <div className="row">
          <div className="col s6">
            <form onSubmit={(e) => this.submit(e, this.state.id)}>
              <div class="input-field col s12">
                <i class="material-icons prefix">person</i>
                <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter Your Name</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="email" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter Your Email</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">phone</i>
                <input onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter You Phone</label>
              </div>

              <div class="input-field col s12">
                <i class="material-icons prefix">mood_bad</i>
                <input onChange={(e) => this.setState({ illness: e.target.value })} value={this.state.illness} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter Your Illness</label>
              </div>
              
              <div class="input-field col s12">
                <i class="material-icons prefix">local_hospital</i>
                <input onChange={(e) => this.setState({ doctor: e.target.value })} value={this.state.doctor} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter Your Doctor</label>
              </div>
              
              <div class="input-field col s12">
                <i class="material-icons prefix">date_range</i>
                <input onChange={(e) => this.setState({ date: e.target.value })} value={this.state.date} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">Enter Your Date  YYYY/MM/DD</label>
              </div>



              <button class="btn waves-effect waves-light right" type="submit" name="action">Submit Your Appoinment
          <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
          <div className="col s6">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Illness</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.patients.map(user =>
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.illness}</td>
                      <td>{user.doctor}</td>
                      <td>{user.date}</td>
                      <td>
                        <button onClick={(e) => this.edit(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                          <i class="material-icons">edit</i>
                        </button>
                      </td>
                      <td>
                        <button onClick={(e) => this.delete(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                          <i class="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                  )
                }

              </tbody>
            </table>
          </div>

        </div> 
      </div>
    );
  }
}

export default App2;
