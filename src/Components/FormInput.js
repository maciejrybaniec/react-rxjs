/** @module Components */

import React, { Component } from 'react';


class FormInput extends Component {

    onFormSubmit = () => {
        const { onFormSubmit } = this.props;
        onFormSubmit(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <div className="FormInput">
                <input ref={(c) => { this.input = c; }} type="text"/>
                <button onClick={this.onFormSubmit}>Create</button>
            </div>
        );
    }
}


export default FormInput;
