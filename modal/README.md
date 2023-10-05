npm install --save veb-modal

Usage :

The Modal component needs 5 props :

    {text} : the text to display in the modal
    {closeModal} : the function to close the modal (you have to add it closing function in your file)
    {styleModalBody} : the style of the modal
    {styleButton} : the style of the button
    {styleText} : the style of the text

Example :

import React, { useState } from 'react'
import Modal from 'veb-modal'
import 'react-modal-component-library/dist/index.css'

function Example () {
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