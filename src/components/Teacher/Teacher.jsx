import './Teacher.css'

const Theacher = (props) => {
    const {name, surname, groups, access} = props;

    return (
        <div className="container col-12">
            <div className="profile-info">
                <div className="profile-img-wrapper">
                    <img className="img-wrapper" src="" alt="user" />
                </div>

                <div className="profile-descr">
                    <div className="prifile-fullname">{name} {surname}</div>
                    <div className="profile-semestr">Преподаватель</div>
                    <div className="profile-group"> Ваши группы: {groups} </div>
                </div>
            </div>

            
        </div>
    )
}

export default Theacher;