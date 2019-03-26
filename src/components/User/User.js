import React, {Component} from 'react';
import styles from './User.module.sass';
import userList from "../../usersList.js"


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.user.isChecked,
            id: props.user.id,
            userList: userList
        }
    }

    checkboxRender(user) {


        if (user.isChecked) {
            return <img className={styles["User-checkbox"]} src="assets/checked.png"/>
        }
        return <img className={styles["User-checkbox"]} src="assets/unchecked.png"/>
    }

    onChecked = () => {
        this.setState({checked: !this.state.checked})
        for (let i = 0; i <userList.length ; i++) {
            if (this.state.userList[i].id === this.state.id){
                this.props.onChange(i);
                console.log(this.props.user.name+" "+userList[i].name+"+++++++++++++++");
            }
        }
        // this.props.onChange(this.state.id);
        // this.props.renderAll();

    }

    userRender(user) {
        return (
            <div className={styles["User-userContainer"]}>
                <div className={styles["User-photo-info"]}>

                    <img className={styles["User-photo"]} src={user.imgPath}/>
                    <div className={styles["User-userInfo"]}>
                        <span className={styles["User-name"]}>{user.name}</span>
                        <span className={styles["User-lever"]}>Level {user.level}</span>
                    </div>
                </div>

                <div className={styles["User-checkBoxContainer"]} onClick={this.onChecked}>
                    {this.checkboxRender(user)}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.userRender(this.props.user)}
            </div>
        )
    }
}

export default User;