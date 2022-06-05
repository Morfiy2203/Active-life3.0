import './RendNorm.css';
import React from 'react'

export class RendNorm extends React.Component {
  render() {
    return (
      <div className="task-box">
        <div className="task-box__text">{this.props.text}</div>
        <button className="task-box__open" onClick={this.props.Open} ></button>
        <div class="task-box__check-box">
            <input className="task-box__check" type="checkbox" id="done" onChange={this.props.Check}></input>
            <label className="task-box__label" htmlFor="done">Выполнено</label>
        </div>
      </div>
  )
  }
}

export default RendNorm;