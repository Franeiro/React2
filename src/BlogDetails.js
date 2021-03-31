import { useParams } from "react-router";
import  useFetch  from "./usefetch";

const BlogDetails = () => {

    const {id } = useParams();
    const {data: blog , error, estaCargando} = useFetch('http://localhost:8000/blogs/' + id )
    return ( 

        <div className="blog-details">

            {estaCargando && <div> Cargando ... </div>}
            {error && <div> {error} </div>}
            {blog && ( <article>
                <h2> {blog.title} </h2>
                <p>Escrito por {blog.author}</p>
                <div> {blog.body} </div>


            </article>)}

        </div>
     );
}
 
export default BlogDetails;