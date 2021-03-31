import {useState} from "react"

const Create = () => {
    
    const [title, setTitle] = useState('')
    
    return ( 

        <div className="create">
            <h2>Añadir una nueva Receta</h2>
            <form>
                <label >Titulo </label>
                <input type="text" required value={title}/>
                <label >Blog Body:  </label>
                <textarea required>

                </textarea>
                <label>Blog Author: </label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>

        </div>

        

     );
}
 
export default Create;