import React from 'react'
import './index.css';


export default class CardForm extends React.Component {
    handleChangeForm = (e) => {
        let { onChangeForm } = this.props
        onChangeForm(e.target.name, e.target.value)
    }
    
    render() {
        return (
            <div className="card-form">
                <input 
                    name="cardNumber" 
                    onChange={this.handleChangeForm} 
                    placeholder="Номер карты, 16 символов"
                />
            </div>
        )
    }
}