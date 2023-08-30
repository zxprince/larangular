import { Base } from './base';
import { Brand } from './brand';
import { Media } from './media';
import { ProductCategory } from './product-category';
import { ProductStatus } from '../enums/product-status';
import { ProductVariant } from './product-variant';

export interface Product extends Base {
  name?: string;
  slug?: string;
  status?: ProductStatus;
  brand_id?: string;
  brand?: Brand;
  business_id?: string;
  vat_percent?: string;
  variant_type?: string;
  description?: string;
  categories?: ProductCategory[];
  category_ids?: number[];
  variants?: ProductVariant[];
  media: Media[] | [];
}
