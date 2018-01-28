import React, {Component} from 'react';
import { Text, ListView, FlatList, View, Dimensions} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActionCreators from '../redux/actions/index';

import Todos from '../components/Todos/Todos';

class ActiveTodosScreen extends Component {

  render() {
    const {todosReducer} = this.props;
    const {active} = todosReducer;
    const {todos} = active;
    const {addTodo, completeTodo, deleteActiveTodo} = this.props;

    return (
      <FlatList
        data={todos}
        keyExtractor={todo => todo.id}
        enableEmptySections={true}
        renderItem={({item, index}) => (
          <Todos
            task={item}
            theKey={index}
            completeTodo={ () => deleteActiveTodo(index) }
          />
        )}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TodoActionCreators, dispatch);
};

const mapStateToProps = (state) => ({
  todosReducer: state.todosReducer,
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTodosScreen);
