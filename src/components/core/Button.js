import React from 'react';


class Button extends React.Component{

    // onClick = ({children, isSelected, onClick}) => {
    //     console.log(onClick);
    // }
        render(){
            return(
                <button className='btn btn-primary' onClick={this.props.onClick}>{this.props.onClick}</button>
            ); 
        } 
}
export default Button;