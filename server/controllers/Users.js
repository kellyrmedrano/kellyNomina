const UserData = require('../models/Users');
const jwt = require('jsonwebtoken');

module.exports.test = (req, res) => {
  console.log('test');
  const { id } = res.locals.user;
  console.log(id);
  // const token = req.cookies.jwt;
  // console.log(token);
  res.send('Texto de prueba recibido desde la API. Id de usuario: ' + id);
};


module.exports.getUserOne = async (req, res) => {
  
  try {
    const cedula = req.body.cedula;
    console.log(cedula)
    const UserOne = await UserData.find({cedula:cedula});
    res.status(200).json(UserOne);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports.editUser = async (req, res) => {
  try {
    const data = req.body.userData;
    const filtro = req.body.user;
    console.log(req.body)
    
    let userupdate = await UserData.findOneAndUpdate(filtro, data);
    res
      .status(200)
      .json({ message: 'Usuario Actualizado', userupdate  });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getUser = async (req, res) => {
  try {
    const allUsers = await UserData.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getUserID = async (req, res) => {
  try {
    const params = req.body.parametros;
    console.log(params);
    const data_search = await UserData.find(params);
    res.status(200).json(data_search);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.createUser = async (req, res) => {
  const salario = parseFloat(req.body.salario);
  const deducciones = salario*0.04
  console.log(deducciones)

  const newUser = new UserData({
    tipo_usuario: 0,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    tipo_identificacion: req.body.tipo_identificacion,
    cedula: req.body.cedula,
    password: req.body.password,
    fecha_nacimiento: req.body.fecha_nacimiento,
    sexo: req.body.sexo,   
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    email: req.body.email,
    fecha_ingreso: req.body.fecha_ingreso,
    tipo_contrato: req.body.tipo_contrato,
    salario: salario,
    deducciones: deducciones,    
    cargo: req.body.cargo,
    estado: 'activo',
  });

  const email = await UserData.findOne({ email: newUser.email });
  if (email) {
    return res
      .status(400)
      .json({ email: 'El email ya se encuentra registrado', password: '' });
  }
  console.log('se se puede')
  console.log(newUser.deducciones)
  try {
    const user = await UserData.create(newUser);
    console.log('Creamos un usuario nuevo!!');
    res.status(200).json({ message: 'Su registro ha sido exitoso!!', user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  console.log('entramos a borrar')
  const id = req.params._id;
  /* const { id } = res.locals.user; */
  try {
    await UserData.findByIdAndRemove(id).exec();
    res.status(201).json({message: 'Succesfully Deleted!'});
    console.log(`usuario ${id} borrado`)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.Logout = async (req, res) => {
  console.log('estamos limpiando la cookie')
  res
    .clearCookie('access_token')
    .status(200)
    .json({ message: 'successfully logged out' });
};

module.exports.getUserOne = async (req, res) => {
  try {
      const UserOne = await UserData.find(req.cedula);
      res.status(200).json(UserOne);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports.getUsuariosActivos = async (req, res) => {
  try {
    const allActiveUsers = await UserData.find({estado: 'activo'})  
    console.log('usuarios activos')
    console.log(allActiveUsers)
    res.status(200).json(allActiveUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getUsuariosFiltroSalario = async (req, res) => {
  try {
    const {value, valueSelect} = req.query;
    if (valueSelect=="mayor"){
      const allActiveUsers = await UserData.find({salario:{$gt:value}})  
      console.log('usuarios activos')
      console.log(allActiveUsers)
     // res.status(200).json({params: value,params2:valueSelect});
     res.status(200).json(allActiveUsers);
    }else{
      const allActiveUsers = await UserData.find({salario:{$lte:value}})  
      console.log('usuarios activos')
      console.log(allActiveUsers)
      res.status(200).json(allActiveUsers);
    }

    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
