import React, { Component } from 'react'
import { FormControl, Button, FormGroup } from 'react-bootstrap'
import Note from './Note'

class App extends Component {
constructor(){
    super();
    this.state={
        text:'',
        editNoteCard:'',
        notes:[]
    }
    // this.deleteNote = this.deleteNote.bind(this);
    // this.editNote = this.editNote.bind(this);
}

handleChange(e){
    this.setState({text:e.target.value});
}

onSubmit(){
    const { text, notes } = this.state;
    const textArray = notes.filter((element) =>  element.text === text);
    if(textArray.length === 1){
        console.log("trying to push same value as before!!")
    }
    else{
        notes.push({text, id:notes.length});
        this.setState({notes})
    }
}

deleteNote = (noteText) => {
    const { notes } = this.state;
    const objectClicked = notes.filter((object) => object.text === noteText);
    notes.splice(notes.indexOf(objectClicked[0]),1);
    this.setState({notes});
}

submitAfterEdit = (noteId) => {
    const { notes, text } = this.state;
    const textArray = notes.filter((element) =>  element.text === text);
    if(!(textArray.length === 1)){
    const valueOfIndex = notes.findIndex((element) => element.id === noteId);
    if(valueOfIndex !== -1){
    notes[valueOfIndex].text = text;
    this.setState({notes,editNoteCard:false})
    };
   }
   else {
       console.log("Try some other value , It already exists!!");
   }

} 

onChangeNoteCard = (e) => {
    this.setState({text:e.target.value});
console.log("onchangenotecard",this.state.text);
}

editNote = (noteId) => {
    this.setState({editNoteCard:noteId})
        }

render() {
    console.log(this.state);
    const { notes, editNoteCard } = this.state;
    const [deleteNote, submitAfterEdit, handleChange, editNote] = [this.deleteNote, this.submitAfterEdit, this.onChangeNoteCard, this.editNote];
    let notesArray = notes.length === 0 ? console.log("notes state is empty") : 
    notes.map((note,index) => <Note key={index} 
                                    noteId={note.id}
                                    noteText={note.text} 
                                    deleteNote={deleteNote}
                                    editNoteCard={editNoteCard}
                                    handleChange={handleChange}
                                    editNote={editNote}
                                    submitAfterEdit={submitAfterEdit}/>) ;
    return (
      <div>
        <h4>Take A Note</h4>
        <form>
            <FormGroup>
                <FormControl
                    className="inputControl"
                    placeholder="Enter text"
                    onChange={this.handleChange.bind(this)}
                />
                {' '}
                <Button onClick={this.onSubmit.bind(this)}>Submit</Button>  
            </FormGroup>  
        </form>
        {notesArray}
       </div>
    )
  }
}

export default App;