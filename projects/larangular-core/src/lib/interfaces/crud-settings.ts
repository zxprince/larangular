import { TransferItem } from 'ng-zorro-antd/transfer';

import { CRUDTrashSettingTypes } from './../enums/crud-trash-setting-types';

export interface CRUDSettings {
  trash: CRUDTrashSettingTypes;
  columns: TransferItem[];
}
