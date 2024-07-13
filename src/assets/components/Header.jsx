import logo from '../img/power.svg'

const Header = () => {
    return(
        <>
            <div className="header-container bg-[#213847] p-2 flex flex-col items-center bg-trasparent rounded-b-3xl">
                <a href="/">
                    <img className="w-[200px]" src={logo} alt="power ranger logo"/>
                </a>
            </div>
        </>
    )
}

export default Header;