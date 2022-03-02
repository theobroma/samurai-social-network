import { IDType, StatusResponseType } from '../@types';
import { instance } from './index';

export const StatusAPI = {
  getStatus(id: IDType) {
    return instance.get<StatusResponseType>(`profile/status/${id}`);
  },
  updateStatus(status: string) {
    return instance.put<string>(`profile/status`, {
      status,
    });
  },
};
