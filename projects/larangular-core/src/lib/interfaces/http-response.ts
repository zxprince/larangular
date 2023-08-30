import { HttpResStatus } from '../enums/http-response-status';

export interface HttpRes {
  status: HttpResStatus;
  data: any;
  code: number;
  message: string;
}
