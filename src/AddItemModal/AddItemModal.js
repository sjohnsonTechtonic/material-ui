import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import { Typography, Input, Button } from '@material-ui/core';

import todoData from '../database';

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
    title: {
        textAlign: 'center'
    },
    textField: {
        width: `${100}%`
    },
    button: {
        float: 'right',
        marginTop: 12 + 'px'
    }
  });

export class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.getModalStyle = this.getModalStyle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    getModalStyle() {
        const top = 50 
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    handleOpen() {
        return this.setState({open: true});
    }

    handleClose() {
        return this.setState({open: false});
    }

    addTask(e) {
        e.preventDefault();
        let taskInput = document.getElementById('todo');
        
        todoData.tasks.put({
            value: taskInput.value
        });

        taskInput.value = '';
        
        return this.handleClose();
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton color="secondary" onClick={this.handleOpen} className="float-right">
                    <Icon className="text-white">add</Icon>
                </IconButton>

                <Modal 
                    aria-labelledby="add-item-modal"
                    aria-describedby="modal-to-add-item"
                    open={this.state.open} 
                    onClose={this.handleClose}
                >
                    <div style={this.getModalStyle()} className={classes.paper}>
                        <Typography className={classes.title} variant="h4" id="addItemTitle">New Task</Typography>

                        <Input 
                            id="todo" 
                            placeholder="To-Do"
                            autoComplete="false" 
                            className={classes.textField} 
                        ></Input>
                        <Button 
                            onClick={this.props.onTaskAdded}
                            variant="contained" 
                            color="primary" 
                            className={classes.button}>
                        Add Task
                        </Button>

                    </div>
                </Modal>
            </div>
            )
        }
}

const AddItemModal = withStyles(styles)(AddItem);

export default AddItemModal
