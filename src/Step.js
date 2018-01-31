import React from 'react'
import './index.css';
import './Step.css';

export default class Step extends React.Component {

    handleClick = () => {
        if (this.props.isClickable) {
            this.props.onClick(this.props.number)
        }
    }
    
    render() {
        return (
            <div className={"step" + (this.props.isClickable ? " step-clickable" : "") + (this.props.isSelected ? " step-selected" : "")} onClick={this.handleClick}>
                <div className="step__number">{this.props.number}</div>
                <div className="step__title">{this.props.children}</div>
            </div>
        )
    }
    
}