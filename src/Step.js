import React from 'react'
import './index.css';



export default class Step extends React.Component {

    handleClick = () => {
        if (this.props.clickable) {
            this.props.onClick(this.props.number)
        }
        else {
            return
        }
        
    }
    render() {
        return (
            <div className={"step" + (this.props.clickable? " step-clickable" : "")} onClick={this.handleClick}>
                <div className={"step__number" + (this.props.isSelected ? " step-selected" : "")}>{this.props.number}</div>
                <div className="step__title">{this.props.children}</div>
            </div>
        )
    }
    
}