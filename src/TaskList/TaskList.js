import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import todoData from '../database';
import { withStyles, ListItemText, Checkbox } from '@material-ui/core';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginTop: `${100}px`
    },
});

export class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            taskList: todoData.tasks.toArray()
        }
    }

  render() {
      const { classes } = this.props;
    return (
      <List styles={classes.root}>
          <ListItem key="1">
            <Checkbox
              tabIndex={-1}
              disableRipple
            />

            <ListItemText>Item to do</ListItemText>
            
            </ListItem>
      </List>
    )
  }
}

export default withStyles(styles)(TaskList);