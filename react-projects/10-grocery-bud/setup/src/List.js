import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, deleteItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit onClick={() => {}} />
              </button>
              <button className="delete-btn">
                <FaTrash
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
