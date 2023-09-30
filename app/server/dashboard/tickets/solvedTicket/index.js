import { getFirestore, collection, query, getDocs } from 'firebase/firestore';

// Define a function to retrieve solved tickets for a user
export async function getSolvedTickets() {
  try {
    const email = localStorage.getItem("email");
    // Initialize Firestore
    const db = getFirestore();

    // Create a reference to the 'solvedTickets' collection
    const solvedTicketsCollectionRef = collection(db, 'users', email, 'solvedTickets');

    // Create a query to get all documents in the collection
    const q = query(solvedTicketsCollectionRef);

    // Get the documents
    const querySnapshot = await getDocs(q);

    // Initialize an array to store the results
    const solvedTickets = [];

    // Loop through the documents and push data to the array
    querySnapshot.forEach((doc) => {
      solvedTickets.push(doc.data());
    });

    // Return the list of solved tickets
    return solvedTickets;
  } catch (e) {
    console.error('Error:', e);
    // Handle any errors here or return an empty array
    return [];
  }
}


