import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ isShow: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else if (name && isEditing) {
      showAlert(true, 'item edited', 'success');
      setIsEditing(false);
      setName('');
    } else {
      showAlert(true, 'item added to the list', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  const showAlert = (isShow = false, msg = '', type = '') => {
    setAlert({ isShow, msg, type });
  };
  const deleteItem = (id) => {
    showAlert(true, 'item deleted', 'danger');
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
  };
  const clearItems = () => {
    showAlert(true, 'items deleted', 'danger');
    setList([]);
  };
  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.isShow && (
            <Alert {...alert} hideAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. eggs"
              className="grocery"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} deleteItem={deleteItem} />
            <button className="clear-btn" onClick={clearItems}>
              clear items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
