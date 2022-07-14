import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './CreateNote.css';
import { useState } from 'react';
const CreateNote = props => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [expand, setExpand] = useState(false);
  const InputChangeHandler = e => {
    const { name, value } = e.target;

    setNote(prevData => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const onAddNote = e => {
    props.passNote(note);
    // console.log(note);
    setNote(() => {
      return {
        title: '',
        content: '',
      };
    });
  };
  const styleButton = {
    fontSize: '50px',
  };
  const expandIt = () => {
    setExpand(true);
  };
  return (
    <div className="mainDiv">
      <form>
        <TextField
          id="outlined-basic"
          label="Title"
          type="text"
          placeholder="Title"
          style={{ width: '30rem' }}
          autoComplete="off"
          onChange={e => InputChangeHandler(e)}
          name="title"
          value={note.title}
          onClick={expandIt}
        />

        <br />
        {expand ? (
          <TextareaAutosize
            minRows={5}
            placeholder="Enter Your Note Here..."
            style={{ width: '30rem' }}
            className="textArea"
            autoComplete="off"
            onChange={e => InputChangeHandler(e)}
            name="content"
            value={note.content}
          ></TextareaAutosize>
        ) : null}
        <br />
        {expand ? (
          <Button onClick={onAddNote}>
            <AddBoxIcon className="text-dark" style={styleButton} />
          </Button>
        ) : null}
      </form>
    </div>
  );
};
export default CreateNote;
