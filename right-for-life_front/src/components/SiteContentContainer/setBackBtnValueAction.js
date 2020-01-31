import { UPD_BACK_BTN_STATUS } from '../../rootConstants';

export const setBackBtnValueAction = value => ({
  type: UPD_BACK_BTN_STATUS,
  payload: value,
});