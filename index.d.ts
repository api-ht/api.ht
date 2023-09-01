import { ASN } from './types/asn'
import { IPAddress } from './types/ip'


export const API: {
  ip: IPAddress
  asn: ASN
}

export type Resource = {

}

export type Resources = ASN | IPAddress

export { IPAddress }