import React from 'react';


class Button extends React.Component{

        render(){
            const {
                isSelected,
                children,
                onClick
            } = this.props;
            const btnClasses = ['btn'];
            btnClasses.push(isSelected ? 'btn-primary' : 'btn-outline-primary');
            return(
                <button 
                    className = {btnClasses.join(' ')} onClick={onClick}>
                    {children}
                </button>
            );
        }
}
export default Button;