import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
 
class TextValidator extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <div>
                <input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    color-placeholder="#f00"
                />
                {this.errorText()}
            </div>
        );
    }
 
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}
 
export default TextValidator;