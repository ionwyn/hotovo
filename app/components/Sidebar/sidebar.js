import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Content, List, ListItem, Container, Left, Right, Body, Icon } from 'native-base';

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{ height: 120, backgroundColor: 'black' }}
          >
            <Image
              square
              style={{height:140, width: 190, alignSelf: "center"}}
              source={{uri: "https://orig00.deviantart.net/69fe/f/2017/157/d/4/squidward_dab_by_josael281999-dbbuazm.png"}}
            />
          </View>

          <List>
            <ListItem icon onPress={() => this.props.navigation.navigate('Home')}>
              <Left>
                <Icon name="man" />
              </Left>
              <Body>
                <Text>Account</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>

            <ListItem icon onPress={() => this.props.navigation.navigate('Schedule')}>
              <Left>
                <Icon name="list" />
              </Left>
              <Body>
                <Text>Schedule</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="flash" />
              </Left>
              <Body>
                <Text>Hot</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

          </List>

        </Content>
      </Container>
    );
  }
}
