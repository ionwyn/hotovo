import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Separator, Container, Left, Right, Body, Content, Card, Header, Icon, Button, Title, Item, Input } from 'native-base';
import Timeline from 'react-native-timeline-listview';

export default class Schedule extends Component {

constructor() {
    super();
    this.data = [
      {time: '09:00', title: 'The', description: 'Earth is another planets hell'},
      {time: '10:45', title: 'Eagle', description: 'Id rather see me dead than to see me suffer'},
      {time: '12:00', title: 'Eats', description: 'Sneak home and pray youll never know the hell where laughter go'},
      {time: '14:00', title: 'My', description: 'Better by you'},
      {time: '16:30', title: 'Eyes', description: 'Better than me'},
      {time: '20:00', title: 'The worm', description: 'Loose'},
      {time: '23:00', title: 'He licks', description: 'As a rubber soul'},
      {time: '23:59', title: 'My bones', description: 'My time is up.'}
    ];
  }

  render() {

    return (
      <Container>

        <Card>
          <Timeline
            data={this.data}
            circleSize={20}
            circleColor='rgb(0,0,0)'
            lineColor='rgb(0,0,0)'
            timeContainerStyle={{minWidth:52, marginTop: 0}}
            timeStyle={{textAlign: 'center', backgroundColor:'#fff', color:'black', padding:5, borderRadius:13}}
            descriptionStyle={{color:'black'}}
            options={{
              style:{paddingTop:5}
            }}
          />
        </Card>
      </Container>
    );
  }
}
