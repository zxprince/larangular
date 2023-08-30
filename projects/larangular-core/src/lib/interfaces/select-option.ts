export interface SelectOption {
  label: string | number;
  value: string | number | boolean;
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string;
}
