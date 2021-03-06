import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../SidebarItem/SidebarItem';


class SidebarComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render(){
        const {notes, classes, fileID} = this.props
        return(
            <div className={classes.sidebarContainer}>
                <Button
                    onClick={this.newNoteBtnClick}
                    className={classes.newNoteBtn}>{this.state.addingNote ? "Cancel" : "New Note"}
                </Button>
                {
                    this.state.addingNote ? 
                    <div>
                        <input type="text" className={classes.newNoteFileName} placeholder="Enter File Name"
                        onKeyUp={(e) => this.updateTitle(e.target.value)}></input>
                        <Button
                            className={classes.newNoteSubmitBtn}
                            onClick={this.newNote}>Submit</Button>
                    </div> : null
                }
        </div>
        );
    }
    /*
    This block of code is for when notes are within a daatabase and the sidebar Items can appear
    <List>
        {
        notes.map((_note, _index) => {
            return(
                <div key={_index}>
                    <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        fileID={fileID}
                        selectNote={this.selectNote}></SidebarItemComponent>
                    <Divider></Divider>
                </div>
            );
        })
    }
    </List>
    */
    //Creates a blank new Note File
    newNoteBtnClick = () => {
        this.setState({addingNote:!this.state.addingNote, title: null});
    }
    updateTitle = (txt) => {
        this.setState({title: txt});
    }
    newNote = () => {
        //Insert database storing here
        this.setState({title:null, addingNote: false});
    }
    selectNote = () =>{
        console.log("Select Note")
    }
    deleteNote = () => {
        console.log("Delete Note")
    }
}
export default withStyles(styles)(SidebarComponent)