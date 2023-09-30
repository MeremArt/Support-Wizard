import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Fascinate } from 'next/font/google';

// Define a function to send a message to the 'chats' collection
export async function sendMessage(messageText) {
  try {

    const email = localStorage.getItem("email");
    // Initialize Firestore
    const db = getFirestore();

    // Create a reference to the 'chats' collection
    const chatsCollectionRef = collection(db, 'users', email, 'chats');

    // Create a new message document with a timestamp
    const newMessage = {
      text: messageText,
      timestamp: serverTimestamp(), // This will use the server's timestamp
    };

    // Add the new message document to the collection
    const docRef = await addDoc(chatsCollectionRef, newMessage);

    return true;
  } catch (e) {
    console.error('Error:', e);
    return false;
  }
}

