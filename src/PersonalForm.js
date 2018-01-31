import React from 'react'
import './index.css';


export default class PersonalForm extends React.Component {

    handleChangeForm = (e) => {
        this.props.onChangeForm(e.target.name, e.target.value)
    }

    render() {
        return (
            <div className="personal-form">
                <div>
                    <input 
                        name="firstName" 
                        onChange={this.handleChangeForm} 
                        placeholder="Имя"/>
                </div>
                <div>
                    <input 
                        name="lastName" 
                        onChange={this.handleChangeForm} 
                        placeholder="Фамилия"/>
                </div>
                <div>
                    <input 
                        name="email" 
                        onChange={this.handleChangeForm} 
                        placeholder="E-mail"/>
                </div>
            </div>
        )
    }
}