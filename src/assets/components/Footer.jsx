import home from '../img/icon/home.png'
import plane from '../img/icon/plane.png'
import track from '../img/icon/track.png'
import team from '../img/icon/team.png'

const Footer = () => {
    return(
        <>
        <div className="footer-container bg-[#213847] h-[50px] p-2 flex flex-col justify-center items-center bg-trasparent rounded-t-3xl fixed w-full bottom-0 right-0">
            <div className="footer-icon-container flex w-full items-center justify-around">
                <div>
                    <a href='/'>
                        <img className="" src={home}/>
                    </a>
                </div>
                <div>
                    <a href="trasporti">
                        <img src={plane}/>
                    </a>
                </div>
                <div>
                    <img src={track}/>
                </div>
                <div>
                    <img src={team}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;