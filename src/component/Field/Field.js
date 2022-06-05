import { Component } from "react"
import Task from '../Task/Task'; 
import './Field.css'


class Field extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            edit: [],
            open: [],
            check: [],
        };
    };

    Check = (i) =>{
        var arr = this.state.check;
        arr[i] = !arr[i];
        this.setState({check: arr});
    }
    
    Open = (i) => {
        var arr = this.state.open;
        arr[i]= !arr[i];
        this.setState({open: arr})
    }
    
    Edit = (i) => {
        var arr1 = this.state.edit;
        var arr2 = this.state.open;
        arr1[i]=!arr1[i];
        arr2[i]=!arr2[i];
        this.setState ({edit: arr1});
        this.setState ({open: arr2});
    }

    add = (text) => {
        var arr1 = this.state.tasks;
        var arr2 = this.state.open;
        var arr3 = this.state.check;
        var arr4 = this.state.edit;
        arr1.push (text);
        arr2.push (false);
        arr3.push (false);
        arr4.push (false);
        this.setState ({tasks: arr1});
        this.setState ({open: arr2});
        this.setState ({check: arr3});
        this.setState ({edit: arr4});
    }

    deleteBlock = (i) => {
        var arr1 = this.state.tasks;
        var arr2 = this.state.open;
        var arr3 = this.state.check;
        var arr4 = this.state.edit;
        arr1.splice (i, 1);
        arr2.splice (i, 1);
        arr3.splice (i, 1);
        arr4.splice (i, 1);
        this.setState ({tasks: arr1});
        this.setState ({open: arr2});
        this.setState ({check: arr3});
        this.setState ({edit: arr4});
    }

    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    }

    Save = (text, i) => {
        this.updateText (text, i);
        var arr = this.state.edit;
        arr[i]= !arr[i];
        this.setState({edit: arr})
    }

    Remove = (i) => {
        var arr = this.state.open;
        arr[i]= !arr[i];
        this.deleteBlock (i);
        this.setState({open: arr})
    }

    eachTask = (item, i) => {
        return(<Task key={i} index={i} Uspdate={this.updateText} edit={this.state.edit} deleteBlock={this.deleteBlock} Edit={this.Edit} Check={this.Check} Open={this.Open} Remove={this.Remove} Save={this.Save} tasks={item} open={this.state.open} check={this.state.check} >
            {item}
        </Task>);
    }
    
    render() {
        return(
            <div className="active-life">
                <div className="new-task">
                    <button className="new-task__button" onClick={this.add.bind (null, 'Задание')}></button>
                </div>
                <div className="task-list">{this.state.tasks.map (this.eachTask)}</div> 
            </div>
        );
    };
};

export default Field