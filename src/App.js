import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoListContainer from './components/TodoListContainer'
import TaskPage from './components/TaskPage'
import { BASE_URL, TODO_ITEM_URL } from './constants/routers';
import { ContextProvider } from './context/TodoContext'

class App extends React.Component {

  state = {
    tasks: [],
  }

  render() {
    return (
      <ContextProvider value={
        {
          tasks: this.state.tasks,
          updateState: (newState) => this.setState({ tasks: newState })
        }
      }>
        <Router>
          <Switch>
            <Route
              exact
              path={BASE_URL}
              component={TodoListContainer}
            />
            <Route
              exact
              path={`${TODO_ITEM_URL}/:id`}
              component={TaskPage}
            />
          </Switch>
        </Router >
      </ContextProvider >
    );
  }
}

export default App;
