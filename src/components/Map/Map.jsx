import { useState } from "react";

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

import dataMap from "../../db/Map.json";
import './Map.css';



const Map = () => {
    const data = dataMap.Map;

    const [show, setShow] = useState(false);
    const [modalId, setModalId] = useState(null);
    

    const activateModal = (id) => {
        setShow(true);
        setModalId(id);
    };

    const cards = data.map((item) => {
        return (
            <div className="place__card" id={item.id} key={item.id} onClick={() => activateModal(item.id)}>
                <div className="image__block">
                    <img className="image" src={item.image} alt=""/>
                </div>
                <h2 className="title">{item.title}</h2>
            </div>
            )
    });

    function createModal(id, mapData = data) {
        const currentItem = mapData[id - 1];

        return (
            <Modal show={show} onHide={() => setShow(false)} size={"lg"} centered>
                <Modal.Header closeButton>
                <Modal.Title>{currentItem.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {
                            currentItem.gallery?.map((el, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <div className="modal-image__block">
                                            <img className="modal-image" src={el} alt={currentItem.type} />
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    <div className='info'>
                        <div className="address">{currentItem.address}</div>
                        <div className="marks">{currentItem.marks}</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="type">{currentItem.type}</div>
                </Modal.Footer>
            </Modal>
        )
    }

    const modal = show ? createModal(modalId) : null;

    return (
        <div className={"cards"}>
            {cards}
            {modal}
        </div>
    )
}

export default Map;