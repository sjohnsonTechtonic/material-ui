import React, { Component } from 'react';

import style from './theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import AddItemModal from './AddItemModal/AddItemModal';
import TaskList from './TaskList/TaskList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleTaskAdded = this.handleTaskAdded.bind(this);
  }

  handleTaskAdded(e) {
    console.log(e);
  }

  render() {
    return (
      <MuiThemeProvider theme={style}>
        <AppBar id="toolbar" position="sticky">
          <Toolbar color="primary">
            <Typography color="primary" variant="title">To-Do List</Typography>

            <AddItemModal onTaskAdded={this.handleTaskAdded} className="float-right" />
          </Toolbar>
        </AppBar>

        <TaskList id="taskList" />
      </MuiThemeProvider>
    );
  }
}

export default App;
