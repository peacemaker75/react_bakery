import React from 'react';
import Slider from './Slider'
    

class Add extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            input: '',
            price: 1
            };
            this.onChangeInput=this.onChangeInput.bind(this)
            this.onChangeSlider=this.onChangeSlider.bind(this)
    }

    onChangeSlider(val){
        this.setState({
            price: val
        })
    }

    onChangeInput (evt){
        this.setState({
            input: evt.target.value
        })
    }
    render(){
        const {
            price,
            input
        } = this.state;
        return(
            <div>
                <input 
                value={input}
                onChange={this.onChangeInput}
                />
                <Slider
                onChange={this.onChangeSlider}
                value={price}/>
                <button>add</button>
            </div>
        );
    }
}

export default Add;
