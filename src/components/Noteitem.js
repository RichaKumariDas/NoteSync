import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const { deleteNote } = useContext(noteContext);
  const { note, updateNote, showAlert } = props;

  return (
 <div className="col-auto mb-4">
  <div className="note-card">
    <div className="note-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <i className="far fa-edit" onClick={() => updateNote(note)} />
      <i
        className="far fa-trash-alt"
        onClick={() => {
          deleteNote(note._id);
          showAlert('Note deleted successfully', 'success');
        }}
      />
    </div>
    
    {/* ✅ Title pushed down */}
    <h5 className="note-title">{note.title}</h5>

    <p className="note-desc">{note.description}</p>
    {note.tag && <small className="note-tag">#{note.tag}</small>}
  </div>
</div>


  );
};

export default Noteitem;
