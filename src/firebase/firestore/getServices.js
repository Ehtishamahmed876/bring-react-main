import firebase_app from "../config";
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app)
export const findAll = async () => {
    const doc_refs = await getDocs(collection(db, "parcelType"))

    const res = []

    doc_refs.forEach(country => {
        res.push({
            id: country.id, 
            ...country.data()
        })
    })

    return res
}