import logo from '../img/power.svg'

const Header = () => {
    return(
        <>
            <div className="header-container p-2 flex flex-col items-center bg-trasparent">
                <a href="/">
                    <img className="w-[200px]" src={logo} alt="power ranger logo"/>
                </a>
            </div>
        </>
    )
}

export default Header;