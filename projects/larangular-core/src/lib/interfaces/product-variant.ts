import { Base } from './base';
import { Media } from './media';
import { ProductVariantStatus } from '../enums/product-variant-status';
import { SellableTypes } from '../enums/sellable-types';

export interface ProductVariant extends Base {
  product_id?: number;
  name?: string;
  sku?: string;
  sellable_type?: SellableTypes;
  status?: ProductVariantStatus;
  barcode?: string;
  mrp?: number;
  uom?: string;
  vat?: number;
  min_order_qty?: number;
  max_order_qty?: number;
  processing_cost?: number;
  max_discount_percent?: number;
  pack_weight?: number;
  media?: Media[];
}
