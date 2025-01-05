export enum EnumFilterDurationType {
  DATE_TIME = 0,
  DISTANCE = 1
}

enum EnumFilterDurationDistance {
  MINUTES = 0,
  HOURS = 1,
  DAYS = 2,
  WEEKS = 3,
  MONTHS = 4,
  YEARS = 5
}

export enum EnumReviewStatus {
  PENDING = 0,
  REVIEWED = 1
}

export enum EnumRiskStatus {
  Severe = 0,
  High = 1,
  Medium = 2,
  Low = 3,
  Pending = 4
}

export enum EnumSignatureCount {
  REMOTE_ADDRESS = 0,
  EXTERNAL_SIGNATURE = 1,
  SINGLE_SIGNATURE = 2,
  MPC2 = 3,
  MPC3 = 4,
  MPC4 = 5,
  MULTI_SIGNATURE_2 = 6,
  MULTI_SIGNATURE_2_3 = 7,
  MULTI_SIGNATURE_2_4 = 8,
}

export enum EnumComplianceIntegration {
  Elliptic = 0,
  Versal_Scanner = 1
}

interface FilterDurationByDateTime {
  type: EnumFilterDurationType.DATE_TIME
  from?: string
  to?: string
}

interface FilterDurationByDistance {
  type: EnumFilterDurationType.DISTANCE
  from?: {
    value: string
    type: EnumFilterDurationDistance
  }
  to?: {
    value: string
    type: EnumFilterDurationDistance
  }
}

type FilterDurationBy = FilterDurationByDateTime | FilterDurationByDistance

export interface SearchFilter {
  walletId?: string
  createdAt?: FilterDurationBy
  accountId?: string
  blockchain?: string[]
  updatedAt?: FilterDurationBy
  monitored?: boolean
  operator?: boolean
  quarantined?: boolean
  treasury?: boolean
  verified?: boolean
  reviewStatus?: EnumReviewStatus[]
  currency?: string
  complianceIntegrationId?: string
  complianceIntegrationService?: EnumComplianceIntegration[]
  signatureCount?: EnumSignatureCount[]
  walletName?: string
  walletAddress?: string
  publicKey?: string
  remoteWalletId?: string
  signerWalletAddress1?: string
  signerWalletAddress2?: string
  signerWalletAddress3?: string
  signerWalletAddress4?: string
  riskStatus?: EnumRiskStatus[]
  riskLastAnalyzed?: FilterDurationBy
  riskScanCount?: FilterDurationBy
  serviceComplianceId?: string
}

export enum EnumSearchCpnType {
  INPUT = 1,
  DATE_TIME = 2,
  SWITCH = 3,
  MULTI_OPTIONS = 4
}

type DefaultSearchCpn = {
  type: EnumSearchCpnType
  label: string
  key: keyof SearchFilter
}

export type SearchCpnSwitch = DefaultSearchCpn

export type SearchCpnInput = DefaultSearchCpn

export type SearchCpnDateTime = DefaultSearchCpn

export type SearchCpnMultiOptions = DefaultSearchCpn & {
  type: EnumSearchCpnType.MULTI_OPTIONS
  options: {
    label: string
    value: EnumRiskStatus
      | EnumSignatureCount
      | EnumComplianceIntegration
      | EnumReviewStatus
      | string
  }[]
}

export type SearchCpnType = SearchCpnSwitch | SearchCpnInput | SearchCpnDateTime | SearchCpnMultiOptions