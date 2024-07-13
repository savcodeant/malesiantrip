import Header from "./Header";
import Team from "./Team";
import arrow from '../img/arrow.svg';


const Home = () => {
    return(
      <>
        <div className="home-container text-white flex flex-col ">
          <div className="home-title-container flex flex-col items-center  m-1 p-2 bg-opacity-30">
            <h1 className="text-2xl mb-4">Benvenuti Power Ranger!</h1>
            <p>Siamo pronti a partire per una nuova emozionante missione! La nostra destinazione: la splendida Malesia! Questa webapp è stata creata per essere il nostro quartier generale digitale, pieno di tutte le informazioni, curiosità e risorse che ci serviranno per affrontare ogni sfida e scoprire ogni meraviglia di questa terra straordinaria.</p>
            <p className="mt-4">La Malesia è una terra di incredibile diversità, dove modernità e tradizione convivono armoniosamente. Dalle vibranti città di Kuala Lumpur e Georgetown alle spiagge idilliache delle isole Perhentian e Langkawi, dai rigogliosi parchi nazionali di Taman Negara e Borneo alle affascinanti culture locali, c'è un mondo di avventure che ci aspetta.</p>          
          </div>
        <div>
          <div className="flex justify-center hidden">
            <p>
              Con il menu sottostante puoi
            </p>
          </div>
        </div>
        </div>
      </>  
    )
}

export default Home;