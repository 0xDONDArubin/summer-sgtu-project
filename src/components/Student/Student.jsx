import './Student.css';

const Student = (props) => {
    const {name, surname, group, semestr, subscribe} = props;

    const userSubscribe = subscribe ? "Активка" : "Не активна"
    return (
        <div className="container col-12">
            <div className="profile-info">
                <div className="profile-img-wrapper">
                    <img className="img-wrapper" src="" alt="user" />
                </div>

                <div className="profile-descr">
                    <div className="prifile-fullname">{name} {surname}</div>
                    <div className="profile-group">{group}</div>
                    <div className="profile-semestr">Текущий семестр: {semestr}</div>
                    <div className="profile-subscribe">Подписка: {userSubscribe}</div>
                </div>
            </div>

            <div className="profile-report">
                <div className="profile-report-wrapper">
                    <ul className="profile-subject-descr">
                        <li className="profile-subject-name">Название предмета:</li>
                        <li className="rofile-subject-report">Оценка:</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Игровые виды спорта</li>
                        <li className="rofile-subject-report">Зачет</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Компьютерные технологии обработки изображений</li>
                        <li className="rofile-subject-report">Зачет</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Интерактивное программирование web-приложений</li>
                        <li className="rofile-subject-report">Зачет</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Исследование операций и методы оптимизации</li>
                        <li className="rofile-subject-report">Зачет</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Современные технологии упрапвления базами данных</li>
                        <li className="rofile-subject-report">Удв</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Компьютерные технологии создания изображений</li>
                        <li className="rofile-subject-report">Отл</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Информационные технологии</li>
                        <li className="rofile-subject-report">Отл</li>
                    </ul>
                    <ul className="profile-subject">
                        <li className="profile-subject-name">Архитектура информационных систем</li>
                        <li className="rofile-subject-report">Отл</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Student;