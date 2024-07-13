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
                  <div className="trasport-btn border-2 flex items-center border-zinc-200 rounded-full p-1 text-zinc-200 active:text-blue-600 active:border-blue-600">
                    <p>DETTAGLI TRASPORTI</p>
                    <img className="w-[15px]" src={arrow} alt="freccia tasto" />
                  </div>
                </a>
              </div>
              <div className="mission-btn-container">
                <div className="mission-btn">
                  <p>Dettagli Missione</p>
                </div>
              </div>
            </div>
        </div>
      </>  
    )
}

export default Home;