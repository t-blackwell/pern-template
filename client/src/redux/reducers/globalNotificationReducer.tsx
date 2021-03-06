import { globalNotification } from '../actionTypes';

const initialState = {
  snackbar: {
    show: false,
    severity: 'info',
    message: '',
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case globalNotification.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: {
          show: true,
          ...action.payload,
        },
      };
    case globalNotification.HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: {
          show: false,
          message: '',
        },
      };
    default:
      return state;
  }
}
