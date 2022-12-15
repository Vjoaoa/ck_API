
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useContext } from "react";
import { DetailContext } from "./contests/Detail";

const DetailCard = () => {

  const { dentista} = useContext(DetailContext);

  return (
//As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>
        Informação sobre {dentista.nome} {dentista.sobrenome}{" "}
      </h1>
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
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                Matrícula: {dentista.matricula}
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
  };
    
  //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    
      


// <ScheduleFormModal />

export default DetailCard;
