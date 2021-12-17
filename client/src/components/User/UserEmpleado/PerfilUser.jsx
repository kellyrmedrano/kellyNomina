import React, { useState, useEffect }from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../../public/css/PerfilUser.css";
import { checkUser } from "../../../redux/apiCalls/authApiCalls";

const Perfil = () => {

  const [user, setUser] = useState({});
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    checkUser(dispatch);
  }, [dispatch])

  console.log('Dato preguntado')
  console.log(user)
  console.log('Dato respondido')
  console.log(currentUser)

        return (          
            <div className="content">
              <div className="row">
                <div className="col-md-3 bg-white border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF2psCzfbB611rnUhxgMi-lc2oB78ykqDGYb4v83xQ1pAbhPiB&usqp=CAU" alt=""
                    />
                    <span className="font-weight-bold">Amelly</span>
                    <span className="text-black-50">amelly12 @bbb.com</span>
                    <span> </span>
                  </div>
                </div>


                <div className="col-md-5 bg-white border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Perfil Empleado</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                          id = 'nombre'
                          disabled
                          value={currentUser.nombre}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value= {currentUser.apellido}
                          placeholder="Apellido"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Numero de Telefono</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Numero de Telefono"
                          value={currentUser.telefono}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Direccion</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Direccion"
                          value={currentUser.direccion}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="labels">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={currentUser.email}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Salario</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pais"
                          value= {currentUser.salario}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Fecha de Ingreso</label>
                        <input
                          type="text"
                          className="form-control"
                          value={currentUser.fecha_ingreso}
                          placeholder="Ciudad"
                        />
                      </div>
                    </div>
                  </div>
                </div>



              </div>

            </div>
          
     
    );
}
export default Perfil;
