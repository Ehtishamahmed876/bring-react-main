import { getFirestore, doc, collection, getDocs } from 'firebase/firestore';
import firebase_app from '../config'; // Replace with your Firebase configuration import

const db = getFirestore(firebase_app);

// Function to get data from a subcollection
const getSubcollectionData = async (collectionName, docId, subcollectionName) => {
  try {
    const parentDocRef = doc(db, collectionName, docId);
    const subcollectionRef = collection(parentDocRef, subcollectionName);
    const querySnapshot = await getDocs(subcollectionRef);
    console.log(querySnapshot)
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); 
        console.log("doc is",doc)

    });
    return data;
  } catch (error) {
    console.error('Error fetching data from subcollection:', error);
    return [];
  }
};

export default getSubcollectionData;