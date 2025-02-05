import {
  bigint,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Address, addressSchema } from './address';

/**
 * Represents the payment details of a card to be used for payments. These
 * details are determined by the payment token generated by Web Payments SDK.
 */
export interface Card {
  /** Unique ID for this card. Generated by Square. */
  id?: string;
  /** Indicates a card's brand, such as `VISA` or `MASTERCARD`. */
  cardBrand?: string;
  /** The last 4 digits of the card number. */
  last4?: string;
  /** The expiration month of the associated card as an integer between 1 and 12. */
  expMonth?: bigint;
  /** The four-digit year of the card's expiration date. */
  expYear?: bigint;
  /** The name of the cardholder. */
  cardholderName?: string;
  /** Represents a physical address. */
  billingAddress?: Address;
  /**
   * __Not currently set.__ Intended as a Square-assigned identifier, based
   * on the card number, to identify the card across multiple locations within a
   * single application.
   */
  fingerprint?: string;
  /** The ID of a customer created using the Customers API to be associated with the card. */
  customerId?: string;
  /**
   * An optional user-defined reference ID that associates this card with
   * another entity in an external system. For example, a customer ID from an
   * external customer management system.
   */
  referenceId?: string;
  /** Indicates whether or not a card can be used for payments. */
  enabled?: boolean;
  /** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
  cardType?: string;
  /** Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. */
  prepaidType?: string;
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API
   * returns this field.
   */
  bin?: string;
  /**
   * Current version number of the card. Increments with each card update. Requests to update an
   * existing Card object will be rejected unless the version in the request matches the current
   * version for the Card.
   */
  version?: bigint;
}

export const cardSchema: Schema<Card> = object({
  id: ['id', optional(string())],
  cardBrand: ['card_brand', optional(string())],
  last4: ['last_4', optional(string())],
  expMonth: ['exp_month', optional(bigint())],
  expYear: ['exp_year', optional(bigint())],
  cardholderName: ['cardholder_name', optional(string())],
  billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
  fingerprint: ['fingerprint', optional(string())],
  customerId: ['customer_id', optional(string())],
  referenceId: ['reference_id', optional(string())],
  enabled: ['enabled', optional(boolean())],
  cardType: ['card_type', optional(string())],
  prepaidType: ['prepaid_type', optional(string())],
  bin: ['bin', optional(string())],
  version: ['version', optional(bigint())],
});
