import { Base } from './base';
import { MediaItem } from './media-item';
import { User } from '@delon/theme';

export interface Media extends Base {
  type?: string;
  user_id?: number;
  user?: User;
  is_public?: boolean | 0 | 1;
  items: MediaItem[];
}
