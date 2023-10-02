import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const jsonwebtoken = require('jsonwebtoken');


export async function getUserData() {
    try{
        
        const db = getFirestore();
var email = localStorage.getItem("email");

const documentRef = doc(db, 'users', email);

const documentSnapshot = await getDoc(documentRef);

if (documentSnapshot.exists()) {
 return documentSnapshot.data();
}

return {};
}catch(e){
    return {};
}
}
