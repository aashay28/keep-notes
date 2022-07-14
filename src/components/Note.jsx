import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Note.css';
import { Container } from 'react-bootstrap';
const Note = props => {
  const deleteItemHandler = () => {
    props.deleteItem(props.id);
  };
  return (
    <Container className="noteMain">
      <div>
        <div className="">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <button onClick={deleteItemHandler}>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Note;
