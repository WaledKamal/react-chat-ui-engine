// import firebase funcations (REF,SET, GET,PUSH)
import { ref, get, set, push } from 'firebase/database';
import db from './config';

// get users message 
export const getMessages = (userID) => {
    return get(ref(db, `users/${userID}/messages`))
}

// push a new message to database
export const pushMessage = (userID, message) => {
     push(ref(db, `users/${userID}/messages`), message)
}
