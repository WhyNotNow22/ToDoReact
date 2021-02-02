import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoListContainer from './components/TodoListContainer'
import TaskPage from './components/TaskPage'
import { BASE_URL, TODO_ITEM_URL } from './constants/routers';

function App() {
  return (
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
    </Router>
  );
}

export default App;
