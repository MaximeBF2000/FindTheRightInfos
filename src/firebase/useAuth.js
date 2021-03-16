import { useState, useEffect } from "react"
import { auth, fireStore } from "./index"

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(authRes => {
      if(authRes) {
        try {
          const unsub = fireStore.collection("users").onSnapshot(snap => {
            const users = snap.docs.map(doc => doc.data())
            setUser(users.find(user => user?.uid == authRes?.uid))
            setLoading(false)
          })

          return () => unsub()
        } catch(err) {
          setError(err)
        }
      } else {
        setUser(null)
        setLoading(false)
      }
    })

    return () => unsub()
  }, [])

  return [user, loading, error]
}

export const useAuthActions = () => {
  const login = async creds => {
    try {
      const response = await auth.signInWithEmailAndPassword(creds?.email, creds?.password)
      return new Promise(res => res(response))
    } catch(err) {
      return new Promise((_, rej) => rej(err))
    }
  }

  const register = async creds => {
    try {
      const response = await auth.createUserWithEmailAndPassword(creds?.email, creds?.password)
      await fireStore.collection("users").doc(response?.uid).set({
        uid: response?.user?.uid,
        name: creds?.name,
        email: response?.user?.email,
        courses: [],
        lang: "english"
      })
      return new Promise(res => res(response))
    } catch(err) {
      return new Promise((_, rej) => rej(err))
    }
  }

  const logout = async () => {
    try {
      await auth.signOut()
      return new Promise(res => res())
    } catch(err) {
      return new Promise((_, rej) => rej(err))
    }
  }

  return { login, logout, register }
}