import React from 'react';
import './Task.css';
import RendNorm from '../Render/RendNorm/RendNorm';
import RendOpen from '../Render/RendOpen/RendOpen';
import RendCheck from '../Render/RendCheck/RendCheck';
import RendEdit from '../Render/RendEdit/RendEdit';

class Task extends React.Component {
  
  Update = (text) => {
    this.props.Update(text, this.props.index);
  }
  
  Check = () =>{
    this.props.Check(this.props.index);
  }

  Open = () => {
    this.props.Open(this.props.index);
  }

  Edit = () => {
    this.props.Edit(this.props.index);
  }

  Remove = () => {
    this.props.Remove(this.props.index);
  }

  Save = (text) => {
    this.props.Save(text, this.props.index);
  };

  render() {
    
    if(this.props.edit[this.props.index]){
      return (<RendEdit update={this.Update} save={this.Save} />);
    }
    else if(this.props.open[this.props.index]){
      return (<RendOpen Edit={this.Edit} Remove={this.Remove} text={this.props.tasks} />);
    }
    else if(this.props.check[this.props.index]){
      return (<RendCheck Open={this.Open} text={this.props.tasks} Check={this.Check} />);
    }
    else{
      return (<RendNorm Open={this.Open} text={this.props.tasks}  Check={this.Check}/>);
    }
  };
};

export default Task;