import Header from "./Header";
import Team from "./Team";
import arrow from '../img/arrow.svg';


const Home = () => {
    return(
      <>
        <div className="home-container text-white flex flex-col ">
          <div className="home-title-container flex flex-col items-center bg-zinc-200 rounded-lg m-1 bg-opacity-30">
            <h1>Benvenuti Power Ranger!</h1>
            <p>Siamo pronti a partire per una nuova emozionante missione! La nostra destinazione: la splendida Malesia! Questa webapp è stata creata per essere il nostro quartier generale digitale, pieno di tutte le informazioni, curiosità e risorse che ci serviranno per affrontare ogni sfida e scoprire ogni meraviglia di questa terra straordinaria.</p>
          </div>
            <Team />
            <div className="btn-container">
            <div className="transport-btn-container flex grow justify-start ml-4">
              <a href="trasporti">
                <div className="trasport-btn w-[200px] flex items-center justify-around border-2 border-gray-300 rounded-full p-1 text-gray-200 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-lg hover:shadow-md active:text-blue-600 active:border-blue-600">
                  <p className="font-semibold text-sm mx-2">DETTAGLI TRASPORTI</p>
                  <img className="w-[15px]" src={arrow} alt="freccia tasto" />
                </div>
              </a>
            </div>
            <div className="transport-btn-container flex grow justify-start ml-4">
              <a href="missioni">
                <div className="trasport-btn w-[200px] flex items-center justify-around border-2 border-gray-300 rounded-full p-1 text-gray-200 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-lg hover:shadow-md active:text-blue-600 active:border-blue-600">
                  <p className="font-semibold text-sm mx-2">DETTAGLI MISSIONI</p>
                  <img className="w-[15px]" src={arrow} alt="freccia tasto" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </>  
    )
}

export default Home;