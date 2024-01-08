import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function Single() {
  const { id } = useParams();
  const itemId = parseInt(id, 10); // Convert id to a number

  const selectedItem = api.find((e) => e.id === itemId);

  return (
    <div className='service-container'>
      <p className='service-name'>{selectedItem.name}</p>
      {selectedItem ? (
        <div className='item' key={itemId}>
          <div className="image">
            <img src={selectedItem.img} alt="" />
          </div>
          <div className="info">
             <p>{selectedItem.description}</p>
          </div>
          
         
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default Single;
