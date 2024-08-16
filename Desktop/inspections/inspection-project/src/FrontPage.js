import { useContext } from "react";
import { globalContext } from "./App"

function FrontPage(){
    const {language, setLanguage} = useContext(globalContext)

    return (
        <div>
            <p>frontpage</p>
            <p>{language}</p>
            <button onClick={ () => setLanguage('Espa')}>CHange language</button>
            <div className="container">
                <button>BOX 1</button>
                <button>BOX 2</button>
                <button>BOX 3</button>
                <button>BOX 4</button>
                <button>BOX 5</button>
                <button>BOX 6</button>
                <button>BOX 7</button>
                <button>BOX 7</button>

            </div>
        </div>
    )
}

export default FrontPage;