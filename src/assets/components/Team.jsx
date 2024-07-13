import Benito from '../img/Benito.jpg'
import Saverio from '../img/Saverio.jpg'
import Claudio from '../img/Claudio.jpg'
import Marco from '../img/Marco.jpeg'
import Daniele from '../img/Daniele.jpg'
import Domenico from '../img/Domenico.jpg'

const Team = () => {
    return(
        <>
            <div className='team-container'>
                <div className='team-title-container text-center'>
                    <h1>Consoci il team!</h1>
                </div>
                <div className='team-grid flex flex-col '>
                    <div className='team-grid-row flex p-3'>
                        <img className="w-1/3 rounded-full mr-3 border-4 border-pink-200" src={Saverio}/>
                        <img className="w-1/3 rounded-full border-4 border-black" src={Daniele}/>
                        <img className="w-1/3 rounded-full ml-3 border-4 border-blue-500" src={Benito}/>
                    </div>
                    <div className='team-grid-row flex p-3'>
                        <img className="w-1/3 rounded-full mr-3 border-4 border-red-500" src={Domenico}/>
                        <img className="w-1/3 rounded-full border-4 border-yellow-500" src={Claudio}/>
                        <img className="w-1/3 rounded-full ml-3 border-4 border-white" src={Marco}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;