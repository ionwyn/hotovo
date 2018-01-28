import React, { Component } from 'react';
import { ListView, View, Text, Dimensions, Image, LayoutAnimation } from 'react-native';
import { Card, Container } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import styles from './styles';
import Todos from '../Todos/Todos';
// import PropTypes from 'prop-types';

// redux
// import { connect } from 'react-redux';

export default class ParallaxListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      accordionVisible: false,
      today: new Date(),
      isActionButtonVisible: true,
    };
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      today: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _onScroll = (event) => {
  // Simple fade-in / fade-out animation
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
    };
    // Check if the user is scrolling up or down by confronting the new scroll position with your own one
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
      ? 'down'
      : 'up';
    // If the user is scrolling down (and the action-button is still visible) hide it
    const isActionButtonVisible = direction === 'up';
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear);
      this.setState({ isActionButtonVisible });
    }
    // Update your scroll position
    this._listViewOffset = currentOffset;
  }

  render() {

    const { onScroll = () => {} } = this.props;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const TodoList = this.props.arr.map((todos, i) => {
      return (
        <Todos theKey={i} task={todos}/>
      );
    });

    return (
      <Container>
        <ListView
          ref="ListView"
          style={styles.container}
          enableEmptySections={true}
          dataSource={this.dataSource.cloneWithRows(TodoList)}
          renderRow={(rowData) => (
            <Card>
              { rowData }
            </Card>
          )}
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              headerBackgroundColor="#333"
              stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
              parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
              backgroundSpeed={10}
              outputScaleValue={25}

              renderBackground={() => (
                <View key="background">
                  <Image source={{
                    uri: 'https://balijungletrekking.files.wordpress.com/2016/12/sunrise-from-the-top-of-mount-batur-bali-jungle-hiking-tour-package.png',
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT}}/>
                  <View style={{position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,.4)',
                    height: PARALLAX_HEADER_HEIGHT}}/>
                </View>
              )}
              renderForeground={() => (
                <View key="parallax-header" style={ styles.parallaxHeader }>
                  <Image style={ styles.avatar } source={{
                    uri: 'https://i.pinimg.com/736x/e8/d0/4d/e8d04d1377254c02d2888450cbcb8245.jpg',
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE
                  }}/>
                  <Text style={ styles.sectionSpeakerText }>
                    { days[this.state.today.getDay()] }, { months[this.state.today.getMonth()]} { this.state.today.getDate() }
                  </Text>
                </View>
              )}

              renderStickyHeader={() => (
                <View key="sticky-header" style={{ marginTop: 20 }}>
                  <Text style={styles.stickySectionText}>To do</Text>
                </View>
              )}

              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <Text style={styles.fixedSectionText}
                    onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                    Scroll to top
                  </Text>
                </View>
              )}
              onScroll={this._onScroll}
            />
          )}
        />
      </Container>
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const PARALLAX_HEADER_HEIGHT = window.height;
const STICKY_HEADER_HEIGHT = 70;

// export default connect()(ParallaxListView);
