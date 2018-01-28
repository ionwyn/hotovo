import React, { Component } from 'react';
import { Animated, Image, Text, TextInput, View, StyleSheet, ScrollView, ListView, Dimensions, PixelRatio, LayoutAnimation, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Separator, Footer, Card, CardItem, Input, Item, Content, Body, Container, Button, Header, Icon, Left, Title, Right, List, ListItem } from 'native-base';
import SlidingUpPanel from 'rn-sliding-up-panel';
import ActionButton from '../components/PathlikeMenu/ActionButton';
import Accordion from 'react-native-collapsible/Accordion';
import SwitchSelector from 'react-native-switch-selector';
import Picker from 'react-native-picker';
import ParallaxListView from '../components/ParallaxListView/ParallaxListView';

import config from '../config/config';

let data = config.constants;
var index = 0;


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: new Date(),

      arr: [],
      toDo: [],

      task: '',
      important: 0,
      urgent: 0,
      hour: 0,
      minute: 0,
      completed: false,

      placeholderText: 'How long would that take?',

      visible: false,
      accordionVisible: false,
      isActionButtonVisible: true,
    };
    Picker.init({
      pickerData: data.wheelPickerData,
      selectedValue: [59],
      pickerTitleText: 'Select duration',
      onPickerConfirm: data => {
        this.data = data;
        this.setState({ placeholderText: data[0] + ' hours and ' + data[2] + ' minutes' });
        this.setState({ hour: data[0], minute: data[2] });
      }
    });
  }

  submitTask() {
    this._panel.transitionTo(0);
    index++;
    this.state.arr.push(this.state.task);
    let time = parseInt(this.state.hour) + parseInt(this.state.minute)/60;
    let value = parseInt(this.state.important) + parseInt(this.state.urgent);
    this.state.toDo.push(
      {
        'actName': this.state.task,
        'actTime': time,
        'actValue': value,
        'completed': this.state.completed,
      },
    );
    this.setState({
      arr: this.state.arr,
      toDo: this.state.toDo,

      task: '',
      important: 0,
      urgent: 0,
      hour: 0,
      minute: 0,
      placeholderText: 'How long would that take?',
    });
  }

  render() {

    return (
      <Container>

        <ParallaxListView arr={this.state.arr}/>

        <SlidingUpPanel
          ref= { c => this._panel = c }
          visible= { this.state.visible }
          onRequestClose={ () => this.setState({ visible: false })}
          showBackdrop= { false }
          allowDragging= { false }
          style={{ backgroundColor: 'white' }}
        >
          <Container style={{ backgroundColor: 'white' }}>
            <Card style={{flex:0}}>
              <CardItem>
                <Item>
                  <Icon active name='md-clipboard' />
                  <Input
                    placeholder= 'What would you like to do?'
                    onChangeText={(text) => this.setState({ task: text })}
                  />
                </Item>
              </CardItem>
            </Card>

            <Card style={{flex:0}}>
              <CardItem>
                <Item onPress={ () => Picker.show()}>
                  <Icon name="md-time" />
                  <Input
                    placeholder={this.state.placeholderText}
                    onChangeText={(text) => this.setState({ task: text })}
                    editable={false}
                  />
                </Item>
              </CardItem>
            </Card>

            <View style={{marginTop:50}}>
              <SwitchSelector
                hasPadding buttonColor={'black'} options={data.switchSelectorData1}
                initial={0} onPress={ (index) => this.setState({ important: index })}/>
              <SwitchSelector
                hasPadding buttonColor={'black'} options={data.switchSelectorData2}
                initial={0} onPress={ (index) => this.setState({ urgent: index })}/>
            </View>

            <Card style={{marginTop:195}}>
              <Button full dark onPress={ () => {
                this.submitTask();
                this.setState({ isActionButtonVisible: true });
                console.log(this.state.toDo);
              }}
              style={{ height: 70 }}>
                <Text style={{fontSize: 20, color:"white"}}>Add task</Text>
              </Button>
            </Card>

          </Container>
        </SlidingUpPanel>

        {this.state.isActionButtonVisible &&
          <ActionButton buttonColor="rgb(0,0,0)" radius={ 75 } position="right">
            <ActionButton.Item buttonColor='#000' title="New Task" onPress={() => {
              this.setState({ visible: true });
              this.setState({ isActionButtonVisible: false });
            }}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#000' title="Notifications" onPress={() => { this.props.navigation.navigate('Schedule');} }>
              <Icon name="md-list-box" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#000' title="All Tasks" onPress={() => {Picker.show();}}>
              <Icon name="md-settings" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton> }
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
