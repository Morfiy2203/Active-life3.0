import React from 'react'
import './RendOpen.css';

export class RendOpen extends React.Component {
  render() {
    return (
        <div className="task-box">
          <div className="task-box__text">{this.props.text}</div>
          <button className="task-box__edit" onClick={this.props.Edit} >Редактировать</button>
          <button className="task-box__delete" onClick={this.props.Remove} >Удалить</button>  
        </div>
    )
  }
}

export default RendOpen;
