import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const useAuth = () => {
  const auth = getAuth()
  const { setError, setUser } = useUserStore()
  const router = useRouter()

  const githubLogin = () => {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GithubAuthProvider.credentialFromResult(result)
        const token = credentials?.accessToken
        const user = result.user<UserInfo>
        console.log(user)
        setUser(user)
        router.push({ path: '/' })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData?.email
        const credential = GithubAuthProvider.credentialFromError(error)
        setError(errorMessage)
      })
  }

  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        const token = credentials?.accessToken
        const user = result.user<UserInfo>
        console.log(user)
        setUser(user)
        router.push({ path: '/' })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData?.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        setError(errorMessage)
      })
  }

  const logout = () => {
    auth.signOut()
    setUser(null)
    router.push({ path: '/login' })
  }

  return {
    githubLogin,
    googleLogin,
    logout
  }
}

export default useAuth
