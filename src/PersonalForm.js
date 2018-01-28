import React from 'react'
import './index.css';


export default class PersonalForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChangeForm = (e) => {
        this.props.onChangeForm(e.target.name, e.target.value)
    }

    render() {
        return (
            <div className="personal-form">
                <input name="firstName" onChange={this.handleChangeForm}/>
                <input name="lastName" onChange={this.handleChangeForm}/>
                <input name="email" onChange={this.handleChangeForm}/>
            </div>
        )
    }
}