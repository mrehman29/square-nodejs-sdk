import { object, Schema, string } from '../schema';

/** A request to link a customer to a gift card */
export interface LinkCustomerToGiftCardRequest {
  /** The ID of the customer to be linked. */
  customerId: string;
}

export const linkCustomerToGiftCardRequestSchema: Schema<LinkCustomerToGiftCardRequest> = object(
  { customerId: ['customer_id', string()] }
);
