import './Footer.css';

const Footer = () => {
    return (
        <footer className="navbar row-fluid text-center bg-light">
            <div className="container-fluid py-2 justify-content-center">
                <div className="row">
                    <div className="col-12 col-md">
                        <ul className="list-unstyled d-flex justify-content-center mb-0 fs-5">
                            <li><a href="https://vk.com/aleksandrkrkv" className="p-4 text-dark align-middle d-block">Александр</a></li>
                            <li><a href="https://vk.com/mhealdrix" className="p-4 text-dark align-middle d-block">Михаил</a></li>
                            <li><a href="https://vk.com/areueventrying" className="p-4 text-dark align-middle d-block">Никита</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;