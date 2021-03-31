
import BlogList from "./BlogList";
import useFectch from "./usefetch";

const Home = () => {

    const {data: blogs, estaCargando, error } = useFectch('http://localhost:8000/blogs') ;
   
    return ( 

        <div className="home">
           {error && <div> {error} </div>} 
          {estaCargando && <div> Cargando ... </div>} 
          {blogs && <BlogList blogs={blogs} title="Todas las recetas"/> }
          
         
            
        </div>
     );
}
 
export default Home;