import React from "react"

const Style = {
    width: '18rem',
};

const BuscarEmpleado = () =>{
    return(
        <>
        
          <div className="row">
            <div className="col-6">
              <div className="row mb-2 ">
                <label for="" className="col">No Identificación</label>
              </div>
              <div className="row mb-3 ">
                <input type="text" className="form-control" id="cedula"/>
              </div>
              <div className="row mb-4 ">
                <button class="btn btn-primary" type="button">Buscar</button>
              </div>
            </div>
          
            <div className="col-6 ">
              <table className="table-sm table-bordered border-light table-rounded">
                <thead>
                  <tr>
                    <th>Nombre:</th> <td>Mark Gonzalez</td>
                  </tr>
                  <tr>
                    <th>Cargo:</th> <td>Ingeniero de Sistemas</td>
                  </tr>
                  <tr>
                    <th>Fecha Inical Vacaciones:</th> <td>16/01/2022</td>
                  </tr>
                  <tr>
                    <th>Fecha Fin Vacaciones:</th> <td>30/01/2022</td>
                  </tr>
                  <tr>
                    <td><button type="button" className="btn btn-success">Aceptar</button></td> 
                    <td><button type="button" className="btn btn-danger">Rechazar</button></td>
                  </tr>
                </thead>
              </table> 
            </div>
          </div>  
                
            
        </>
    )
}
export default BuscarEmpleado 
    
