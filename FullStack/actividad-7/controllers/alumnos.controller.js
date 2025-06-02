import { alumnos } from "../data/alumnos.js";

//1 Listar todos los alumnos.
export const getAlumnos = (req, res)=>{
 res.status(200).json(alumnos);
 console.log(alumnos)
}

//2  Buscar alumnos por curso.
export const getAlumnosByCurso = (req, res)=>{
 const {nombreCurso} = req.params;
 
//  if(nombreCurso== "Matematicas") 
   const filtro = alumnos.filter(a=>a.curso.toLowerCase() == nombreCurso)

 console.log(filtro)
 res.status(200).json(filtro)
}


//3 Agregar un nuevo alumno
export const createAlumno = (req, res)=>{
  const {name, curso} = req.body
 const newAlumno = 
 {
  id: Date.now(), // id basado en la hora actul, (cambiarlo por otra forma porque se actualiza cada que modifico algo)
  name: name,
  curso: curso
 }
 alumnos.push(newAlumno)
 res.status(200).json(newAlumno)
 console.log(alumnos)
}


