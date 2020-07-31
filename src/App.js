import React from 'react';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
    activeTab: 'add',
    items: []
    }

    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    
  }

  onAdd() {
    
  }

  onClickTabAdd() {
    console.log('je suis la #1');
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
  renderTabAdd () {
    if (this.state.activeTab !== 'add') {
        return null;
    }
    return (
      <Add />
    );
  }

  renderTabList () {
    if (this.state.activeTab !== 'list') {
        return null;
    }
    return (
      <List />
    );
  }

  renderTabPay () {
      if (this.state.activeTab !== 'pay') {
          return null;
      }
      return (
        <Pay />
      );
    }

  render(){
      const {
          activeTab
      } =this.state;
      return(
        <div className="container-fluid">
          <div className='col'>
              <div className="row">
                  <h1>Bakery</h1>
              </div>
            
              <div className="row">
                  <Button isSelected={activeTab === 'Add'}
                  onClick={this.onClickTabAdd}>Add</Button >
                  <Button isSelected={activeTab === 'List'}
                  onClick={this.onClickTabList}>List</Button >
                  <Button isSelected={activeTab === 'Pay'}
                  onClick={this.onClickTabPay}>pay</Button>
              </div>
              <div>
                    {activeTab === 'add' ? <Add/> : null}
                    {activeTab === 'list' ? <List/> : null}
                    {activeTab === 'pay' ? <Pay/> : null}
              </div>
          </div>
        </div>
      );
  }
}

export default App;