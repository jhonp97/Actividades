// import { cursos } from "../data/cursos.js"
import { alumnos } from "../data/alumnos.js"
import { profesores } from "../data/profesores.js"

export const getCursos = (req, res) => {

    //  res.status(200).json(cursos)
    // set solo almacena valores unicos por lo que los duplicados los elimina y con new set me devuelve un valor sin duplicados
    const cursos = [...new Set(alumnos.map(a => a.curso).concat(profesores.map(p => p.curso)))].sort(); // para ordenarlos alfabet
    res.status(200).json(cursos);

    console.log(cursos)
}
export const searchCurso = (req, res) => {
    const { nombreCurso } = req.params;

    const alumnosCurso = alumnos.filter(a => a.curso == nombreCurso);
    const profesoresCurso = profesores.filter(p => p.curso == nombreCurso)

    res.status(200).json({
        curso: nombreCurso,
        profesor: profesoresCurso,
        CantidadAlumnos: alumnosCurso.length,
        alumnos: alumnosCurso

    })

    // codigo de chatgpt
    // const normalizarTexto = (str) =>
    //     str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // const cursoFiltrado = normalizarTexto(nombreCurso);

    // const alumnosCurso = alumnos.filter(a => normalizarTexto(a.curso) === cursoFiltrado);
    // const profesoresCurso = profesores.filter(p => normalizarTexto(p.curso) === cursoFiltrado);

    // if (alumnosCurso.length === 0 && profesoresCurso.length === 0) {
    //     return res.status(404).json({ mensaje: "No se encontraron datos para ese curso." });
    // }

    // res.status(200).json({
    //     curso: nombreCurso,
    //     alumnos: alumnosCurso,
    //     profesores: profesoresCurso
    // });
    console.log("hola")
}

