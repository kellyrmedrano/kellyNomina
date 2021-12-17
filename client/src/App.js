import React from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import LiquidarNomina from "./pages/LiquidarNomina";
import CrearNomina from "./pages/CrearNomina";
import CrearEmpleado from "./pages/CrearEmpleado";
import VacacionesNomina from "./pages/VacacionesNomina";
import PermisosNomina from "./pages/PermisosNomina";
import ReporteSalario from "./pages/ReporteSalario";
import Formulario from "../src/components/User/UserNomina/Formulario";
import PerfilUserNomina from "./pages/PerfilUserNomina.jsx";
import PerfilEmpleado from "./components/User/UserEmpleado/PerfilUser.jsx";
import SoliRep from "./components/User/UserEmpleado/SolicitaRep";
import SolicitarPermiso from "./components/User/UserEmpleado/SolicitarPermiso";
import SolicitarVacaciones from "./components/User/UserEmpleado/SolicitarVac";
import PerfilUserAdmin from "./pages/PerfilUserAdmin";
import GestinarEmpleadoAdmin from "./pages/GestionarEmpleadoAdmin";
import LiquidarNominaAdmin from "./pages/LiquidarNominaAdmin";

function App() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/signin"
          element={
            currentUser === null ? (
              <Login />
            ) : currentUser.rol === 2 ? (
              <Navigate to="/signin/administrador/perfilAdministrador" />
            ) : currentUser.rol === 1 ? (
              <Navigate to="/signin/userNomina/Perfil" />
            ) : currentUser.rol === 0 ? (
              <Navigate to="/signin/userEmpleado/perfilEmpleado" />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/signin/userEmpleado/perfilEmpleado"
          element={<PerfilEmpleado />}
        />
        <Route
          path="/signin/userEmpleado/reporteNomina"
          element={<SoliRep />}
        />
        <Route
          path="/signin/userEmpleado/solicitarPermiso"
          element={<SolicitarPermiso />}
        />
        <Route
          path="/signin/userEmpleado/solicitarVaciones"
          element={<SolicitarVacaciones />}
        />
        <Route
          path="/signin/userEmpleado/solicitarCertificado"
          element={<SoliRep />}
        />

        <Route
          path="/signin/userNomina/crearNomina"
          element={<CrearNomina />}
        />
        <Route
          path="/signin/userNomina/liquidarNomina"
          element={<LiquidarNomina />}
        />
        <Route
          path="/signin/userNomina/reporteSalario"
          element={<ReporteSalario />}
        />
        <Route path="/signin/userNomina/formulario" element={<Formulario />} />
        <Route
          path="/signin/userNomina/Perfil"
          element={<PerfilUserNomina />}
        />
        <Route
          path="/signin/userNomina/crearEmpleado"
          element={<CrearEmpleado />}
        />
        <Route
          path="/signin/userNomina/liquidarNomina"
          element={<LiquidarNomina />}
        />
        <Route
          path="/signin/userNomina/gestionarVacaciones"
          element={<VacacionesNomina />}
        />
        <Route
          path="/signin/userNomina/gestionarPermisos"
          element={<PermisosNomina />}
        />
        <Route
          path="/signin/userNomina/reporteSalario"
          element={<ReporteSalario />}
        />

        <Route
          path="/signin/administrador/perfilAdministrador"
          element={<PerfilUserAdmin />}
        />
        <Route
          path="/signin/administrador/gestionarEmpleado"
          element={<GestinarEmpleadoAdmin />}
        />
        <Route
          path="/signin/administrador/gestionarNomina"
          element={<LiquidarNominaAdmin />}
        />
        <Route
          path="/signin/administrador/gestionarVacaciones"
          element={<ReporteSalario />}
        />
        <Route
          path="/signin/administrador/gestionarPermiso"
          element={<Formulario />}
        />
        <Route
          path="/signin/administrador/generarReportes"
          element={<PerfilUserNomina />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;