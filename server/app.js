const express = require("express");
const dotenv = require("dotenv"); 
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const database = require ('./database');
const UserRoutes = require("./routes/User");
const UserAdmin = require("./routes/UserAdmin");
const UserNomina = require("./routes/UserNomina");
const UserEmpleado = require("./routes/UserEmpleado");
const { requireAuth } = require("./middleware/userMiddleware");

//initialization
var corsOptions = {
  origin: "http://localhost:3000", // dirección del front
  optionsSuccessStatus: 200, 
  credentials: true,
};

const app = express();


// Settings 
app.set('port', process.env.PORT || 5000); //config del puerto

// Middlewares
app.use(morgan("dev")); // permite el track de los datos
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

//Routes
app.use("/", UserRoutes);
app.use("/admin", requireAuth, UserAdmin);
app.use("/nomina", requireAuth, UserNomina);
app.use("/empleado", requireAuth, UserEmpleado);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
  app.use((req, res, next) => { //This middleware checks the local user
    res.locals.user = req.user
    next()
  })