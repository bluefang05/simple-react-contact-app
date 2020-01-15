import { addReducer } from "reactn";
import history from "./browserHistory";

addReducer(
    "initialize", (global) => {
        console.log(localStorage.getItem('contactos'));
        console.log(global);
        if(localStorage.getItem('contactos'))
        {
            console.log(localStorage.getItem('contactos'));
        }else{
            localStorage.setItem('contactos',[]);
            
        }
    }

);
