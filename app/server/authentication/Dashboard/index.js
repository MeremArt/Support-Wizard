import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const jsonwebtoken = require('jsonwebtoken');


export async function hasAuthenticated() {
    
var jwt = localStorage.getItem("jwt");
var email = localStorage.getItem("email");



const documentRef = doc(db, 'users', email);

const documentSnapshot = await getDoc(documentRef);

if (!documentSnapshot.exists()) {
 window.location.replace('/signin');
//  toast: You must sign in first
}

// Get the value of the field.
const fieldValue = documentSnapshot.get('jwt');

// Compare the value of the field to the condition value.
if (fieldValue !== jwt) {
    window.location.replace('/signin');
    //toast: You are logged in somewhere else
}

    
}
