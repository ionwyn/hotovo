import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardItem, Input, Item, Container, Button, Icon } from 'native-base';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Swiper from 'react-native-swiper';
import styles from './styles';

var index = 0;

export default class AddTodo extends Component {

  state = {
    task: '',
    importance: 0,
    urgency: 0,
    hour: 0,
    minute: 0,
    arr: [],
    visible: false
  };

  submitTask() {
    this._panel.transitionTo(0);
    index++;
    this.state.arr.push(this.state.task);
    this.setState({
      arr: this.state.arr
    });
    this.props.arr = this.state.arr;
  }

  handlePress() {
    this.setState({ visible: true});
  }

  render() {
    return (
      <SlidingUpPanel
        ref= { c => this._panel = c }
        visible= { this.props.thisShitVisible }
        onRequestClose={ () => this.setState({ visible: false })}
        showBackdrop= { false }
      >
        <Container style={{ backgroundColor: 'white' }}>
          <Card style={{flex:0}}>
            <CardItem>
              <Item>
                <Icon active name='md-clipboard' />
                <Input
                  placeholder='What would you like to do?'
                  onChangeText={(text) => this.setState({ task: text })}
                />
              </Item>
            </CardItem>
          </Card>
          <Card style={{flex:0}}>
            <CardItem>
              <Item>
                <Icon name="md-time" />
                <Input placeholder='How long would that take?'/>
              </Item>
            </CardItem>
          </Card>

          <Card style={{flex:1}}>
            <Swiper
              height= {70}
              showsButtons={ true }
              showsPagination= { false }
              style={ styles.wrapper }
              onIndexChanged= { (index) => this.setState({ importance: index })}
              next
            >
              <View style={ styles.slide1 }>
                <Text style={{ fontSize: 15, color: 'black' }}>IMPORTANT</Text>
              </View>
              <View style={ styles.slide2 }>
                <Text style={{ fontSize: 15, color: 'white' }}>NOT IMPORTANT</Text>
              </View>
            </Swiper>

            <Swiper
              height= {70}
              showsButtons={ true }
              showsPagination= { false }
              style={ styles.wrapper }
              onIndexChanged= { (index) => this.setState({ urgency: index })}
            >
              <View style={ styles.slide1 }>
                <Text style={{ fontSize: 15, color: 'black' }}>URGENT</Text>
              </View>
              <View style={ styles.slide2 }>
                <Text style={{ fontSize: 15, color: 'white' }}>NOT URGENT</Text>
              </View>
            </Swiper>

          </Card>

          <Card style={{marginTop: 100}}>
            <Button full dark onPress={ () => this.submitTask() } style={{ height: 70 }}>
              <Text style={{fontSize: 20, color:"white"}}>Add task</Text>
            </Button>
          </Card>
        </Container>
      </SlidingUpPanel>
    );
  }
}
