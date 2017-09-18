import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actions from '../state/actions';
import { List, Container } from 'semantic-ui-react'

import FlowCard from '../components/FlowCard'

class App extends Component {

  componentWillMount(){
    this.props.addCard(0);  
  }
  
  
  render() {
    const handleBack = () => {
      this.props.goBack();
      let lastId = this.props.flowChart[this.props.flowChart.length - 1].key; 
      this.props.setCurrentCard(lastId);
    }
    
    
    const listItems = this.props.flowChart.map((card, key) =>
      <List.Item key={key} className={"card-"+key}>
        <List.Content>
          <FlowCard
            cardInfo={card}
            isCurrentCard={card.key===this.props.currentCard}
            selectedOptions={this.props.selectedOptions}
            addCard={this.props.addCard.bind(this)}
            setCurrentCard={this.props.setCurrentCard.bind(this)} 
            goBack={handleBack.bind(this)}
            selectOption={this.props.selectOption.bind(this)}
          />
        </List.Content>
      </List.Item>
    );
    
    return(
      <Container>
        <h1><a href="https://behavioraltech.org/resources/faqs/what-is-dbt/">DBT</a> Skills Flowchart</h1>
        <p>This is a simple app using flow-cards to help decide which DBT Skill fits your situation!</p>
        <List>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {listItems}
          </ReactCSSTransitionGroup>
        </List>
      </Container>
    );
      
  }
  
}

App.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state={}) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);