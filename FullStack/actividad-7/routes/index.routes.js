import { Router } from "express"

// importacion de los controllers de alumnos y profesores
import { getAlumnos, getAlumnosByCurso, createAlumno } from "../controllers/alumnos.controller.js"
import { getProfesores, getAProfesoresByCurso, createProfesores} from "../controllers/profesores.controller.js"
import { getCursos, searchCurso } from "../controllers/cursos.controller.js"
export const router = Router()


// rutas de alumnos
router.get("/alumnos", getAlumnos)                           // listar todos los alumnos
router.get("/alumnos/curso/:nombreCurso", getAlumnosByCurso)  // buscar alumnos del curso X
router.post("/alumnos", createAlumno);                        // agregar un nuevo alumno


// rutas de profesores
router.get("/profesores", getProfesores)                           // listar todos los alumnos
router.get("/profesores/curso/:nombreCurso", getAProfesoresByCurso)  // buscar alumnos del curso X
router.post("/profesores", createProfesores);     


// rutas de cursos
router.get("/cursos", getCursos);                  // listar los cursos
router.get("/cursos/:nombreCurso", searchCurso);
