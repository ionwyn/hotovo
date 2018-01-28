import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Left, Right, Body, Content, Header, Icon, Button, Title, Item, Input } from 'native-base';
import Slider from 'react-native-slider';

export default class AddTodo extends Component {

  state = {
    value: 50,
    task: ''
  };

  submitTask() {
    this.props.navigation.navigate("Todo", { task: this.state.task });
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigate("DrawerOpen") }>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Add a task...</Title>
          </Body>
        </Header>

        <Content>
          <Item underline>
            <Input
              placeholder='Input a task'
              onChangeText={(text) => this.setState({ task: text })}
            />
          </Item>
          <Item underline>
            <Input placeholder='Input number hours'/>
          </Item>
        </Content>

        <Content padder>
          <Text>
            Importance
          </Text>
          <Text>
            { this.state.value }
          </Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            minimumValue= {1}
            maximumValue= {100}
            step= {2}
          />
        </Content>
        <Content padder>
          <Text>
            Urgency
          </Text>
          <Text>
            { this.state.value }
          </Text>
          <Slider
            value={this.state.value}
            onValueChange={value => this.setState({ value })}
            minimumValue= {1}
            maximumValue= {100}
            step= {2}
          />
        </Content>

        <View>
          <Button full info onPress={ () => this.submitTask() }>
            <Text>Add task</Text>
          </Button>
        </View>

      </Container>
    );
  }
}
