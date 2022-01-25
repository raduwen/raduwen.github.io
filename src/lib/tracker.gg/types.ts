type PlatformInfo = {
  platformSlug: string
  platformUserID: string | null
  platformUserHandle: string
  platformUserIdentifier: string
  avatarUrl: string
  additonalParameters: any | null
}

type SocialAccount = {
  platformSlug: string
  platformUserHandle: string
  platformUserIdentifier: string
}

type UserInfo = {
  userId: number | null
  isPremium: boolean
  isVerified: boolean
  isInfluencer: boolean
  isPartner: boolean
  countryCode: string | null
  customAvatarUrl: string | null
  customHeroUrl: string | null
  socialAccounts: [SocialAccount] | null
  pageviews: number | null
  isSuspicious: boolean | null
}

type Metadata = any

type Attributes = any

type Stat = {
  rank: string | null
  percentile: number
  displayName: string
  displayCategory: string
  category: string | null
  metadata: Metadata
  value: number
  displayValue: string
  displayType: string
}

type StatsApex = {
  level?: Stat
  kills?: Stat
  killsPerMatch?: Stat
  winningKills?: Stat
  killsAsKillLeader?: Stat
  damage?: Stat
  matchesPlayed?: Stat
  reviews?: Stat
  sniperKills?: Stat
  rankScore?: Stat
  arenaRankScore?: Stat
}

type StatsCSGO = {
  timePlayerd?: Stat
  score?: Stat
  kills?: Stat
  deaths?: Stat
  kd?: Stat
  damage?: Stat
  headshots?: Stat
  dominations?: Stat
  shotsFired?: Stat
  shotsHit?: Stat
  ShotsAccuracy?: Stat
  sniperKilled?: Stat
  dominationOverkills?: Stat
  dominationRevenges?: Stat
  bombsPlanted?: Stat
  bombsDefused?: Stat
  moneyEarned?: Stat
  hostagesRescued?: Stat
  mvp?: Stat
  wins?: Stat
  ties?: Stat
  matchedPlayed?: Stat
  losses?: Stat
  roundsPlayed?: Stat
  roundsWon?: Stat
  wlPercentage?: Stat
  headshotPct?: Stat
}

type Stats = StatsApex | StatsCSGO

type Segment = {
  type: string
  attributes: Attributes
  metadata: Metadata
  expiryData: string
  stats: Stats
}

type AvailableSegment = {
  type: string
  attributes: Attributes
  metadata: Metadata
}

type StatsProfile = {
  data: {
    platformInfo: PlatformInfo
    userInfo: UserInfo
    metadata: Metadata
    segments: [Segment]
    availableSegments: [AvailableSegment]
    expiryDate: string
  }
}

// TODO
type CollectorSearchResult = any
type SessionList = any
type MatchResult = any
type StatisticalObject = any

export type {
  CollectorSearchResult,
  MatchResult,
  Segment,
  SessionList,
  StatisticalObject,
  StatsProfile,
}
