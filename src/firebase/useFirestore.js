import { useState, useEffect } from "react"
import { fireStore } from "./index"

export default function useFirestore(collectionName) {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const unsub = fireStore.collection(collectionName).onSnapshot(snap => {
        const documents = snap.docs.map(doc => ({...doc.data(), id: doc.id}))
        setDocs(documents)
      }).catch(err => {
        setLoading(false)
        setError(err)
      }).then(() => {
        setLoading(false)
      })
      return () => unsub()
    } catch(err) {
      setLoading(false)
      setError(err)
    }
  }, [collectionName])

  return [docs, loading, error]
}