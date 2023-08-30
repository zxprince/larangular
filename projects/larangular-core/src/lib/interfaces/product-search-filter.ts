import { ProductStatus } from '../enums/product-status';

export enum ProductSearchType {
  PRODUCT = 'product',
  VARIANT = 'variant'
}

export enum ProductSearchOperationOn {
  ANY = 'any'
}

export enum ProductSearchOperationType {
  LIKE = 'like',
  NOT_EQUAL = '<>',
  EQUAL = '=',
  GREATER_THAN = '=',
  GREATER_THAN_EQUAL = '>=',
  LESS_THAN = '<',
  LESS_THAN_EQUAL = '<='
}

export enum ProductSearchOrderBy {
  BEST_MATCH = 'best-match',
  NAME = 'name'
}

export enum ProductSearchOrder {
  BEST_MATCH = 'best-match',
  ASC = 'asc',
  DESC = 'desc'
}

export enum ProductSearchTrashed {
  WITH = 'with',
  WITHOUT = 'without',
  ONLY = 'only'
}

export enum ProductSearchMode {
  INPUT = 'input',
  EDIT = 'edit',
  VIEW = 'view'
}

export interface ProductSearchFilter {
  status?: ProductStatus | null;
  operation_on?: ProductSearchOperationOn | null;
  operation_type?: ProductSearchOperationType | null;
  order_by?: ProductSearchOrderBy | null;
  order?: ProductSearchOrder | null;
  trashed?: ProductSearchTrashed | null;
  limit?: number;
  mode?: ProductSearchMode | null;
  show_image?: boolean;
  fulltext_search?: boolean;
}
