import { EnumComplianceIntegration, EnumReviewStatus, EnumRiskStatus, EnumSearchCpnType, EnumSignatureCount, SearchCpnType } from "../_types/filter.types"

const LEFT_ITEMS: SearchCpnType[] = [
  {
    key: 'walletId',
    type: EnumSearchCpnType.INPUT,
    label: 'Wallet Id'
  },
  {
    key: 'accountId',
    type: EnumSearchCpnType.INPUT,
    label: 'Account Id'
  },
  {
    type: EnumSearchCpnType.MULTI_OPTIONS,
    key: 'blockchain',
    label: 'Blockchain',
    options: [
      {label: 'Ethereum', value: 'ethereum'},
      {label: 'Bitcoin', value: 'bitcoin'},
      {label: 'Viction', value: 'viction'},
      {label: 'Arbitrum', value: 'arbitrum'},
      {label: 'Polygon', value: 'polygon'},
      {label: 'Solana', value: 'solana'},
    ]
  },
  {
    key: 'currency',
    type: EnumSearchCpnType.INPUT,
    label: 'Currency'
  },
  {
    type: EnumSearchCpnType.MULTI_OPTIONS,
    key: 'signatureCount',
    label: 'Signature Count',
    options: [
      {label: 'Remote Address', value: EnumSignatureCount.REMOTE_ADDRESS},
      {label: 'Signer Address', value: EnumSignatureCount.EXTERNAL_SIGNATURE},
      {label: 'Single Signature', value: EnumSignatureCount.SINGLE_SIGNATURE},
      {label: 'MPC (2 of 2)', value: EnumSignatureCount.MPC2},
      {label: 'MPC (3 of 3)', value: EnumSignatureCount.MPC3},
      {label: 'MPC (4 of 4)', value: EnumSignatureCount.MPC4},
      {label: 'Multi-Signature (2 of 2)', value: EnumSignatureCount.MULTI_SIGNATURE_2},
      {label: 'Multi-Signature (2 of 3)', value: EnumSignatureCount.MULTI_SIGNATURE_2_3},
      {label: 'Multi-Signature (2 of 4)', value: EnumSignatureCount.MULTI_SIGNATURE_2_4}
    ]
  },
  {
    key: 'walletName',
    type: EnumSearchCpnType.INPUT,
    label: 'Wallet Name'
  },
  {
    key: 'walletAddress',
    type: EnumSearchCpnType.INPUT,
    label: 'Wallet Address'
  },
  {
    key: 'publicKey',
    type: EnumSearchCpnType.INPUT,
    label: 'Public Key'
  },
  {
    key: 'remoteWalletId',
    type: EnumSearchCpnType.INPUT,
    label: 'Remote Wallet Id'
  },
  {
    key: 'signerWalletAddress1',
    type: EnumSearchCpnType.INPUT,
    label: 'Signer Wallet Address 1'
  },
  {
    key: 'signerWalletAddress2',
    type: EnumSearchCpnType.INPUT,
    label: 'Signer Wallet Address 2'
  },
  {
    key: 'signerWalletAddress3',
    type: EnumSearchCpnType.INPUT,
    label: 'Signer Wallet Address 3'
  },
  {
    key: 'signerWalletAddress4',
    type: EnumSearchCpnType.INPUT,
    label: 'Signer Wallet Address 4'
  }
]

const RIGHT_ITEMS: SearchCpnType[] = [
  // {
  //   key: 'createdAt',
  //   label: 'Created',
  //   type: EnumSearchCpnType.DATE_TIME
  // },
  // {
  //   key: 'updatedAt',
  //   label: 'Updated',
  //   type: EnumSearchCpnType.DATE_TIME
  // },
  {
    key: 'monitored',
    label: 'Monitored',
    type: EnumSearchCpnType.SWITCH
  },
  {
    key: 'operator',
    label: 'Operator',
    type: EnumSearchCpnType.SWITCH
  },
  {
    key: 'quarantined',
    label: 'Quarantined',
    type: EnumSearchCpnType.SWITCH
  },
  {
    key: 'treasury',
    label: 'Treasury',
    type: EnumSearchCpnType.SWITCH
  },
  {
    key: 'verified',
    label: 'Verified',
    type: EnumSearchCpnType.SWITCH
  },
  {
    key: 'reviewStatus',
    label: 'Review Status',
    type: EnumSearchCpnType.MULTI_OPTIONS,
    options: [
      {label: 'Pending Review', value: EnumReviewStatus.PENDING},
      {label: 'Under Review', value: EnumReviewStatus.REVIEWED},
    ]
  },
  {
    key: 'complianceIntegrationId',
    type: EnumSearchCpnType.INPUT,
    label: 'Compliance Integration Id'
  },
  {
    key: 'complianceIntegrationService',
    label: 'Compliance Service',
    type: EnumSearchCpnType.MULTI_OPTIONS,
    options: [
      {label: 'Eliiptic', value: EnumComplianceIntegration.Elliptic},
      {label: 'Versal Scanner', value: EnumComplianceIntegration.Versal_Scanner},
    ]
  },
  {
    key: 'riskStatus',
    label: 'Risk Status',
    type: EnumSearchCpnType.MULTI_OPTIONS,
    options: [
      {label: 'Severe', value: EnumRiskStatus.Severe},
      {label: 'High', value: EnumRiskStatus.High},
      {label: 'Medium', value: EnumRiskStatus.Medium},
      {label: 'Low', value: EnumRiskStatus.Low},
      {label: 'Pending', value: EnumRiskStatus.Pending},
    ]
  },
  // {
  //   key: 'riskLastAnalyzed',
  //   label: 'Risk Last Analyzed',
  //   type: EnumSearchCpnType.DATE_TIME
  // },
  // {
  //   key: 'riskScanCount',
  //   label: 'Risk Scan Count',
  //   type: EnumSearchCpnType.DATE_TIME
  // },
  {
    key: 'serviceComplianceId',
    type: EnumSearchCpnType.INPUT,
    label: 'Service Compliance Id'
  }
]

export const SEARCH_DATA = [
  LEFT_ITEMS,
  RIGHT_ITEMS
]