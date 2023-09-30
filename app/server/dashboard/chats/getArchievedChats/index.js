import { getFirestore, collection, query, getDocs } from 'firebase/firestore';

// Define a function to retrieve solved tickets for a user
export async function getArchivedChats() {
  try {
    const email = localStorage.getItem("email");
    // Initialize Firestore
    const db = getFirestore();

    // Create a reference to the 'archievedChats' collection
    const archievedChatsCollectionRef = collection(db, 'users', email, 'archievedChats');

    // Create a query to get all documents in the collection
    const q = query(archievedChatsCollectionRef);

    // Get the documents
    const querySnapshot = await getDocs(q);

    // Initialize an array to store the results
    const archievedChats = [];

    // Loop through the documents and push data to the array
    querySnapshot.forEach((doc) => {
      archievedChats.push(doc.data());
    });

    // Return the list of solved tickets
    return archievedChats;
  } catch (e) {
    console.error('Error:', e);
    // Handle any errors here or return an empty array
    return [];
  }
}


