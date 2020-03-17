import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { AddTodo, RemoveTodo, CompleteTodo, EditTodo} from "./actions/actions";
import { Button, FormControl, InputGroup, Navbar } from "react-bootstrap"



class App extends Component {
    state = {
        inputValue: ""
    };
    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

  
    handleSubmit = () => {
        this.props.AddTodo(this.state.inputValue);
    };
 
    


    render() {
        return ( 
        <div className = "App">
            <div className="todolist">
                <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Daily ToDo List</Navbar.Brand></Navbar>
            <InputGroup className="mb-3">
    <FormControl aria-describedby="basic-addon1" onChange = { this.handleChange }
            value = { this.state.inputValue }
            type = "text"
            placeholder = "Add your todo.."/>
            <InputGroup.Prepend>
            <Button onClick = { this.handleSubmit } variant="outline-success"><i class="fa fa-plus" aria-hidden="true"></i></Button>
    </InputGroup.Prepend>
  </InputGroup>
             {this.props.todo.map((el,i)=> (
                <div key = {el.id} className="todo-list">
                    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={()=>this.props.CompleteTodo(el.id)} />
    </InputGroup.Prepend  >
    <FormControl aria-label="Text input with checkbox" style={{textDecoration: el.isComplete ? "line-through" : "none"}}
                  type="text"
                  value={el.text}
                  readOnly
                  onClick={e => {
                    e.target.readOnly = false;
                  }}
                  onBlur={e => {
                    e.target.readOnly = true;
                  }}
                  onChange={e => this.props.EditTodo(e.target.value, el.id)} />
                  <Button variant="danger" onClick = {() => this.props.RemoveTodo(el.id)} ><i class="fa fa-trash" aria-hidden="true"></i></Button> 
  </InputGroup >
                
                </div >
            ))
        } 
        </div></div>
        </div>
    );
}
}


const mapStateToProps = state => {
    return { todo: state.todo };
};
const mapDispatchToProps = dispatch => {
    return {
        AddTodo: text => dispatch(AddTodo(text)),
        RemoveTodo: (id) => dispatch(RemoveTodo(id)),
        CompleteTodo: (id) => dispatch(CompleteTodo(id)),
        EditTodo: (payload, id) => { dispatch(EditTodo(payload, id))}
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(App);