import { profesores } from "../data/profesores.js";

// 1. Listar profesores 
export const getProfesores =(req, res)=>{
res.status(200).json(profesores)
    console.log(profesores)
}

// 2. Buscar profesores por curso
export const getAProfesoresByCurso =(req, res)=>{
    const {nombreCurso} = req.params
    const profesFiltro = profesores.filter(p=>p.curso== nombreCurso)
    console.log(profesFiltro)
    res.status(200).json(profesFiltro)
}
export const createProfesores =(req, res)=>{
    const {name, curso} = req.body
    const newProfesor = {
        id: profesores.length+1,
        name: name,
        curso: curso
    }
    profesores.push(newProfesor)
    res.status(200).json(profesores)
    console.log(newProfesor)
}