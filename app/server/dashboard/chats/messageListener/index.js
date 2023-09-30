import { useEffect, useState } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export function messageListener({ clientEmail }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();

    // Create a reference to the 'chats' collection
    const chatsCollectionRef = collection(db, 'users', clientEmail, 'chats');

    // Create a query to get messages ordered by timestamp
    const q = query(chatsCollectionRef, orderBy('timestamp'));

    // Create a listener for new messages
    const listen = onSnapshot(q, (querySnapshot) => {
      const updatedMessages = [];

      querySnapshot.forEach((doc) => {
        updatedMessages.push({ id: doc.id, ...doc.data() });
      });

      setMessages(updatedMessages);
    });

    return () => {
      listen();
    };
  }, [clientEmail]);

  // Render the list of messages
  return (
    <div>
      <h2>Chat Messages:</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}













// Example:
const clientEmail = 'user@example.com'; // Replace this
export default function App() {
  return (
    <div>
      <ChatComponent clientEmail={clientEmail} />
    </div>
  );
}
