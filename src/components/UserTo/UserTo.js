import React, {Component} from 'react';
import styles from './UserTo.module.sass';
import userList from "../../usersList.js"

class UserTo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            checked: props.user.isChecked,
            id: props.user.id,
            userList: userList
        }
    }

    onChecked = () => {
        // this.state.visible = !this.state.visible;
        this.setState({checked: !this.state.checked})
        for (let i = 0; i < userList.length; i++) {
            if (this.state.userList[i].id === this.state.id) {
                this.props.onChange(i);
                console.log(this.props.user.name + " " + userList[i].name + "+++++++++++++++");
            }
        }
    }



    render() {
        return (
            <div>
                <span className={styles['UserTo-list']} key={this.props.user.id}
                      onClick={this.onChecked}>{this.props.user.name}</span>

                {/*<span className={styles['UserTo-list']}>,</span>*/}
                {/*<span className={styles['UserTo-list']}>,</span>*/}
            </div>
        )
    }

}

export default UserTo;