// import axios from 'axios';
import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import subjectsData from '../../db/Subjects.json';
import './Semestr.css';

const Semestr = () => {

    const subjects = subjectsData.semesters;

    //Если файл приходит с сервера
    // const [subjects, setSubjects] = useState([]);

    // useEffect(() => {
    //     fetchDB()
    // }, [])

    // async function fetchDB() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/semester');
    //         console.log(response);
    //         setSubjects(response.data);
    //     } catch (e) {
    //         alert(e);
    //     }
    // }

    const [index, setIndex] = useState(0); // Индекс слайдера
    const [show, setShow] = useState(false); // Показ модального окна
    const [modalId, setModalId] = useState(null); // Id модального окна
    
    const handleClose = () => setShow(false); // Закрытие модального окна
    const handleShow = () => setShow(true); // Открытие модального окна
    const handleId = (id) => setModalId(id); // Передача id для модального окна

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const onModalActive = (id) => { // При клике на предмет (откроется модалка)
        handleShow()
        handleId(id)
    }

    const renderSemestr = (data) => {
        const items = data.map((item, i) => {
            return(
                <Carousel.Item key={i}>
                    <div className="wrapper bg-white">
                        <ul className="subject-descr">
                            <li className="item-col">Название</li>
                            <li className="item-col">Описание</li>
                            <li className="item-col">Время</li>
                            <li className="item-col">Преподаватель</li>
                        </ul>

                        {renderSubject(item)}
                    </div>
                </Carousel.Item>
            )
        })

        return (
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null}>
                {items}
            </Carousel>
        )
    }

    const renderSubject = (data) => {
        const listSubject = data.subject.map(item => {
            return (
                <Button variant="white" onClick={() => onModalActive(item.id)} key={item.id}>
                    <ul className="subject">
                        <li className="item-col">{item.title.length > 27 ? `${item.title.substring(0, 24)}...` : item.title}</li>
                        <li className="item-col">{item.descr.length > 27 ? `${item.descr.substring(0, 24)}...` : item.descr}</li>
                        <li className="item-col">{item.time}</li>
                        <li className="item-col">{item.teacher[0].name.length > 27 ? `${item.teacher[0].name.substring(0, 24)}...` : item.teacher[0].name}</li>
                    </ul>
                </Button>
            )
        })

        return listSubject
    }

    const renderModal = (id, idSemestr, modalData = subjects) => {
        const modal = modalData[idSemestr].subject[id - 1];

        const teacher = modal.teacher.map((item, i) => {
            return (
                <div className="modal-teacher-item" key={i}>
                    <a href={item.link}>{item.name}</a>
                </div>
            )
        })

        return (
            <Modal show={show} onHide={handleClose} restoreFocus={false} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-descr">
                        <div className="modal-descr-subject">Описание предмета:</div>
                        <div className="modal-descr-item">{modal.descr}</div>
                    </div>
                    <div className="modal-teachers">
                        <div className="modal-teachers-wrapper">Возможные преподаватели:</div>
                        <div className="modal-teachers-item">{teacher}</div>
                    </div>
                    <div className="modal-report">
                        <span className="modal-reporting">Вид отчетности: </span>
                        <span className="modal-reporting-view">{modal.reporting}</span>
                    </div>
                    <div className="modal-time">
                       <span className="modal-time-wrapper">Общее количество часов:</span>
                       <span className="modal-time-sum">{modal.time}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const modal = show ? renderModal(modalId, index) : null;
    const semesrt = renderSemestr(subjects)

    return (
        <div className="container col-12 col-md mt-5">
            <div className="semestr">Семестр: {index + 1}/8</div>
            {semesrt}
            {modal}
        </div>
    )
}

export default Semestr;