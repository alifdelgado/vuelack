import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '@/auth/interfaces/UserInterface'

type User = UserInfo | null

export const useUserStore = defineStore('userStore', () => {
  const user = ref<User>(null)
  const token = ref<string>('')
  const error = ref<string>('')

  return {
    user,
    token,

    setUser(newUser: User) {
      user.value = newUser
    },

    setToken(newToken: string) {
      token.value = newToken
    },

    setError(newError: string) {
      error.value = newError
    }
  }
})
