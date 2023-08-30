import { Base } from './base';

export interface MediaItem extends Base {
  media_id?: number;
  size?: string;
  src?: string;
}
