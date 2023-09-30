import { useEffect, useState } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export function chatListener() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    try{
    const email = localStorage.getItem("email");
    // Initialize Firestore
    const db = getFirestore();

    // Create a reference to the 'chats' collection
    const chatsCollectionRef = collection(db, 'users', email, 'chats');

    // Create a query to get chats ordered by timestamp
    const q = query(chatsCollectionRef, orderBy('timestamp'));

    // Create a listener for new chats
    const listen = onSnapshot(q, (querySnapshot) => {
      const updatedChats = [];

      querySnapshot.forEach((doc) => {
        updatedChats.push({ id: doc.id, ...doc.data() });
      });

      setChats(updatedChats);
    });

    return () => {
      listen();
    };
}catch(e){}
  }, [email]);

  // Render the list of chats
  return (
    <div>
      <h2>Chat Messages:</h2>
      <ul>
        {chats.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}













// Example:
const email = 'user@example.com'; // Replace this
export default function App() {
  return (
    <div>
      <ChatComponent />
    </div>
  );
}
