import './RendEdit.css';
import React, { Component } from 'react'

export class RendEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }

  Save=()=>{
    this.props.save(this.state.value)
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="task-box">
          <input className="task-box__input" placeholder="Введите задание..." type="text" value={this.state.value} onChange={this.handleChange} ></input>
          <button className="task-box__button" onClick={this.Save} >Сохранить</button>
        </div>
    )
  }
}

export default RendEdit

