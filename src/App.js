import React from 'react';
import Add from './components/core/Add'
import List from './components/core/List'
import Pay from './components/core/Pay'
import Button from './components/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);

    this.state = {
    activeTab: 'add',
    items: []
    }
    // this.onClick = this.onClick.bind(this);
  }

  onClickTabAdd() {
    this.setState({
      activeTab: 'add',
    })
  }

  onClickTabList() {
    this.setState({
      activeTab: 'list'
    })
  }

  onClickTabPay() {
    this.setState({
      activeTab:'pay'
    })
  }

  render(){
      return(
        <div className="container-fluid">
          <div className="row">
              <h1>Bakery</h1>
          </div>
          <div className="row">
              <Button onClick={this.onClickTabAdd} />
              <Button onClick={this.onClickTabList} />
              <Button onClick={this.onClickTabPay} />
          </div>
          <div>
              <Add/>
              <List/>
              <Pay/>
          </div>
        </div>
      );
  }
}

export default App;
