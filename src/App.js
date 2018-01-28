import React from 'react'
import './index.css';
import CardForm from './CardForm';
import PersonalForm from './PersonalForm'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: ''
        }
    }


    handleTabClick = (step) => {
        this.setState({step})
    }

    handleChangeForm = (key, value) => {
        let obj = {}
        obj[key] = value
        this.setState(obj)
    }

    handleClickNextForm = () => {
        let {step} = this.state
        step++
        this.setState({step})
    }

    isFormCommitable = () => {
        let {step} = this.state 
        let state = this.state 
        if (step === 1) {
            return state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@')
        }
        if (step === 2) {
            return state.cardNumber.length === 16
        }
    }

    renderForm = () => {
        switch (this.state.step) {
            case 1: 
                return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleChangeForm} />
            case 2:
                return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />
            case 3:
                return 'Поздравляем!'
            default: 
                return "Shouldn't get there"
        }
    }

    render() {
        return (
            <div className="container">
                <div className="tab-panel"></div>
                <div className="form-content">
                    <div>{this.renderForm()}</div>
                    <div className="button-panel">
                        <button className="button-next" onClick={this.handleClickNextForm}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}