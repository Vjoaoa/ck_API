
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";

import api from "../services/api";

const DetailCard = () => {

  useEffect( () => {

    const [detalheDentista, setdetalheDentista] = useState([]);

    useEffect (() => {
      getDentista();  
    }, []);

    async function getDentista() {
      try {
        const response = await api.get("/dentista");
        setdetalheDentista(response.data);
      } catch (error) {
        console.log("Error" + error);
      }  
    }

  detalheDentista.map((dentist) => {

    return (
    <>
    
      <h1>Detail about Dentist {dentist.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentist.nome}</li>

              <li className="list-group-item">
                Sobrenome: {dentist.sobrenome}
              </li>
              <li className="list-group-item">
                Matrícula: {dentist.matricula}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={
                  theme === "light"
                    ? `btn btn-light ${styles.button}`
                    : `btn btn-dark ${styles.button}`
                }
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
    );
  });
  }, []);
};



export default DetailCard;
