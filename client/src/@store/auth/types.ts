import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ClientsItemType = {
  _id: string;
  fullName: string;
  spentSum: number;
  discountProcent: number;
};

export type ClientsListType = {
  data: ClientsItemType[];
};

export type ClientsActionType = ActionType<typeof actions>;
