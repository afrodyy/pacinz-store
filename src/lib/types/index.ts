export interface DiamondPackage {
  id: string
  amount: number
  bonus?: number
  price: number
  popular?: boolean
  label?: string
}

export interface PaymentMethod {
  id: string
  name: string
  type: 'ewallet' | 'bank' | 'pulsa'
  icon: string
  fee?: number
}

export type RankTier =
  | 'warrior'
  | 'elite'
  | 'master'
  | 'grandmaster'
  | 'epic'
  | 'legend'
  | 'mythic'
  | 'mythical_honor'
  | 'mythical_glory'

export interface Rank {
  id: string
  name: string
  tier: RankTier
  sub?: number
  basePrice: number
}

export interface MabarPackage {
  id: string
  name: string
  sessions: number
  hours: number
  price: number
  popular?: boolean
  features: string[]
}

export interface Coach {
  id: string
  name: string
  rank: string
  roles: string[]
  rating: number
  totalGames: number
  winRate: number
  available: boolean
  bio?: string
}

export interface Testimonial {
  id: string
  name: string
  service: 'topup' | 'joki' | 'mabar'
  rating: number
  text: string
  date: string
  avatar?: string
}

export type OrderStatus = 'processing' | 'in_progress' | 'completed'

export interface Order {
  id: string
  service: 'topup' | 'joki' | 'mabar'
  status: OrderStatus
  createdAt: string
  details: Record<string, unknown>
}

export interface TopupFormData {
  userId: string
  server: string
  diamondPackageId: string
  paymentMethodId: string
}

export interface JokiFormData {
  fromRankId: string
  toRankId: string
  username: string
  password: string
  notes?: string
}

export interface MabarFormData {
  packageId: string
  coachId: string
  scheduleDate: string
  scheduleTime: string
  inGameId: string
  notes?: string
}
