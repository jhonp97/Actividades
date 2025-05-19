import { useEffect, useState } from "react";



const Gallery = () => {

    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true)

    const API_KEY = "yG38_VeCbQOz-ZowBbY-7TkVo7dYj3CXKFByW3N0PUU";
    const COLLECTION_ID = "10728337"; // ID de la colección "Birds"
    const url = `https://api.unsplash.com/collections/${COLLECTION_ID}/photos?client_id=${API_KEY}&per_page=10`;

    useEffect(() => {
        setTimeout(() => {
            const listaImagenes = async () => {


                try {
                    const resp = await fetch(url);
                    const data = await resp.json();
                    console.log("Respuesta de la API:", data);
                    setImagenes(data);

                } catch (error) {
                    console.log(`no se pudo obtener la informacion error ${error}`);
                }
                setLoading(false)
            }
            listaImagenes();
        }, 1000);
    }, []);
    console.log(url)
    return (
        <>
         {/* <section className="Gallery"> */}
                <h1 className="Gallery-title">Galeria de imagenes</h1>
                <div className="Gallery-grid">
                    {loading ? <div className="Loading">Cargando...</div> :
                        imagenes.map((imagen, idx) => {
                            return (
                                <article key={idx} className="Card">
                                    <h2>{imagen.alt_description}</h2>
                                    <img src={imagen.urls.regular} alt={imagen.alt_description} loading="lazy" />
                                    <p>{imagen.alternative_slugs.es}</p>
                                </article>
                            );
                        })}

                </div>
            {/* </section> */}
            </>
            );
};

            export default Gallery;