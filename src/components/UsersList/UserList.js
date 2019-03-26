import React, {Component} from 'react';
 import styles from './UserList.module.sass';
import User from "../User/User.js"

class UserList extends Component {

    userListRender(userList) {
        const userListElement =userList.map (user =>
            <User user={user} key={user.id} onChange={this.props.onChange}/>
        );
        return userListElement;
    }

    render() {
        console.log("===========renderListUsers");
        // for (let i = 0; i <this.props.userList.length ; i++) {
        //     console.log(this.props.userList[i].name +" "+this.props.userList[i].isChecked);
        // }
        return (
            <div className={styles["UserList-container"]}>
                {this.userListRender(this.props.userList)}
            </div>
        )
    }
}

export default UserList;