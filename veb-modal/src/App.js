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
        {modalVisible && <Modal text="Employee Created !" closeModal={closeModal} styleModalBody={{ width: 500 }} styleButton={{ backgroundColor: "#15249C", color: "white" }} styleText={{ fontSize: 50 }} />}
      </div>
    )
}

export default App