import React, { Component } from 'react'

const style ={
    input:{
        border: '1px solid lightgray',
        backgroundColor: 'white'
    }
} 


class Note extends Component {
constructor(props){
    super(props);
    this.state={
       
    }
  
}


render() {
    const {deleteNote,  noteText, noteId, editNote, editNoteCard, submitAfterEdit, handleChange} = this.props;
    console.log("this is inside note component")
    return (
            <div className='noteCard'>
                <div className="noteText">
                    <h4>
                    {editNoteCard === noteId ? <input style={style.input}  onChange={(e) => handleChange(e)}/> :<span>{noteText}</span>}
                    </h4>
                </div>
                <div className="noteAction">
                    <span className="addIcon" onClick={() => submitAfterEdit(noteId)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                    <span className="editIcon" onClick={() => editNote(noteId)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                    <span className="deleteIcon" onClick= {() => deleteNote(noteText)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                </div>
            </div>
        )
    }
}

export default Note;