export interface UserInfo {
  localId: string
  email: string
  displayName: string
  photoUrl: string
  emailVerified: boolean
  providerUserInfo: ProviderUserInfo[]
  validSince: string
  lastLoginAt: string
  createdAt: string
  lastRefreshAt: string
}

interface ProviderUserInfo {
  providerId: string
  displayName: string
  photoUrl: string
  federatedId: string
  email: string
  rawId: string
}
