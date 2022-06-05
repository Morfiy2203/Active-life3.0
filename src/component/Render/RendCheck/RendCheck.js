import React from 'react'
import './RendCheck.css';

export class RendCheck extends React.Component {
  render() {
    return (
      <div className="task-box">
          <div className="task-box__text"><s>{this.props.text}</s></div>
          <button className="task-box__open" onClick={this.props.Open} ></button>
          <div class="task-box__check-box">
            <input className="task-box__check" id="done" type="checkbox" onChange={this.props.Check} checked={"checked"}></input>
            <label className="task-box__label" htmlFor="done"> Выполнено</label>
        </div>
      </div>
    )
  }
}

export default RendCheck;
