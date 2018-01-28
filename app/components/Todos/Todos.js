import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import { Text, View } from 'react-native';
import { Icon, CardItem, Button } from 'native-base';

export default class Todos extends Component {

  constructor(props) {
    super(props);
    this.state= {
      completed:false
    };
  }

  render() {

    var swipeoutLeft = [
      {
        component: (
          <View style={ {flexDirection: 'row'} }>
            <Button info><Icon active name="md-information-circle"/></Button>
            <Button danger onPress={ () => this.props.completeTodo }><Icon active name="trash"/></Button>
          </View>
        )
      }
    ];

    return (
      <Swipeout
        right={swipeoutLeft}
        key={ this.props.theKey }
        autoClose={ true }
        buttonWidth= { 100 }
        onPress = { this.props.onClick }
      >
        <CardItem style={{height: 48, flex: 1, flexDirection: 'row'}}>
          { this.state.completed ?
            <Icon name='ios-checkbox' onPress={ () => {this.setState({ completed: false });} }/> :
            <Icon name='ios-checkbox-outline' onPress={ () => {this.setState({ completed: true });} }/> }
          <Text style={{ fontSize: 20, color: 'black', textDecorationLine: this.state.completed ? 'line-through' : 'none' }}>{ this.props.task }</Text>
        </CardItem>
      </Swipeout>
    );
  }
}
