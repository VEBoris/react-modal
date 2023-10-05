import React, { useState } from 'react'
import Modal from './lib/index.js';
import './lib/index.css';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
      <div> 
        <button onClick={openModal}> Open Modal </button>
        {modalVisible && <Modal text="Employee Created !" closeModal={closeModal} />}
      </div>
    )
}

export default App