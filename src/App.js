import React, {Component} from 'react';
import './App.sass';
// import User from "./components/User/User.js"
import UserList from "./components/UsersList/UserList.js";
import userList from "./usersList.js"
import To from "./components/To/To.js";
import Timer from "./components/Timer/Timer.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: userList
        }
    }


    // renderAll = () => {
    //     this.forceUpdate();
    // }

    onChange = (id) => {
       const userList2=[];
        for (let i = 0; i < this.state.userList.length; i++) {
            userList2[i] =this.state.userList[i];
        }
        userList2[id].isChecked =!userList2[id].isChecked;
        this.setState(
            {
               userList: userList2
            }
        )
        // this.state.userList[id].isChecked = !this.state.userList[id].isChecked;
        // console.log( this.state.userList[id].name+" "+this.state.userList[id].isChecked);
        // this.forceUpdate();
    }

    render() {
        return (
            <div className="App">
                <Timer/>
                <To userList={this.state.userList} onChange={this.onChange}/>
                <UserList userList={this.state.userList} onChange={this.onChange}/>
            </div>
        );
    }
}

export default App;
