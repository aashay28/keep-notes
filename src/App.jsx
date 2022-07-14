import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  const [addItem, setAddItem] = useState([]);
  const onAddNote = note => {
    setAddItem(prevData => {
      return [...prevData, note];
    });
  };
  const onDelete = id => {
    setAddItem(oldData => {
      return oldData.filter((curr, idx) => {
        return idx !== id;
      });
    });
  };
  const styleComp = {};
  return (
    <>
      <Header />
      <CreateNote passNote={onAddNote} style={styleComp} />
      {addItem
        ? addItem.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })
        : null}
    </>
  );
}

export default App;
