import { useHistory, useParams } from "react-router";
import  useFetch  from "./usefetch";

const BlogDetails = () => {

    const {id } = useParams();
    const {data: blog , error, estaCargando} = useFetch('http://localhost:8000/blogs/' + id );
    const history = useHistory();

    const handleClick =() =>{

        fetch('http://localhost:8000/blogs/' + id, {method: 'DELETE'}).then( () =>{
            history.push('/');
        })

    }
    return ( 

        <div className="blog-details">

            {estaCargando && <div> Cargando ... </div>}
            {error && <div> {error} </div>}
            {blog && ( <article>
                <h2> {blog.title} </h2>
                <p>Escrito por {blog.author}</p>
                <div> {blog.body} </div>
                <button onClick = {handleClick}>Delete</button>


            </article>)}

        </div>
     );
}
 
export default BlogDetails;