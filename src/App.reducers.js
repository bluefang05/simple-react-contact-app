import { addReducer } from "reactn";
import history from "./browserHistory";

// addReducer(
//     "initialize", (global) => {
//         //const [contacts, setContacts] = useGlobal("contacts");
//         console.log(localStorage.getItem('contacts'));
//         console.log(global);
//         if (localStorage.getItem('contacts')) {
            
//             console.log(localStorage.getItem('contacts'));
//             console.log(localStorage)
//             //setContacts(JSON.parse(localStorage.getItem("contacts")));
//             console.log(contacts);

//         } 
//     }

// );

addReducer(
    "updateLocalStorage",
    (global) => {
        console.log(global)
        localStorage.setItem('contacts', JSON.stringify(global.contacts));
    }
);