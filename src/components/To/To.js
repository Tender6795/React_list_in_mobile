import React, {Component} from 'react';
import styles from './To.module.sass';
import UserTo from "./../UserTo/UserTo.js"
import UsersList from "../UsersList/UserList";

class To extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //      To:false
    //     }
    // }
// <UserTo user={userList[i]} />
    userCheckedListRender(userList) {
       // const checkedList=[];
        // const userListElement = userList.filter(user =>
        //
        //     <User user={user} key={user.id}/>
        // );
        // return userListElement;
        const userListElement = [];
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].isChecked) {
                userListElement.push(userList[i]);
            }
        }
        let checkedList = userListElement.map(user =>
            <UserTo user={user} key={user.id}  onChange={this.props.onChange} />
        );
        return checkedList;
    }

// <UserTo name={userList[i].name} />
    render() {
        console.log("To====renderListUsers");
        return (
            <div className={styles["To-container"]}>
                <span className={styles["To-to"]}>To: </span>
                {/*<span className={styles["To-list"]}> {this.userCheckedListRender(this.props.userList)}</span>*/}
                 { this.userCheckedListRender(this.props.userList)}
            </div>
        )
    }
}

export default To;