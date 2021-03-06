/**
 * UI store actions
 */

import {
	SET_LOADING,
	SET_ERROR,
	CLEAR_ERROR,
	SET_DARK_THEME,
	SET_DEV_MENU,
	SET_SHOW_ALL_ERRORS,
} from '../types';

const unknownError = {
	code: 'unknown_error',
	message: 'Unknown error',
	details: [],
};

// Loading
export const setLoadingAction = () => ({ type: SET_LOADING, payload: true });
export const clearLoadingAction = () => ({ type: SET_LOADING, payload: false });

// Error
export const clearErrorsAction = () => ({ type: CLEAR_ERROR });
export const setErrorAction = (error) => ({ type: SET_ERROR, payload: error });
export const setUnknownErrorAction = () => ({ type: SET_ERROR, payload: unknownError });
export const setShowAllErrors = (show) => ({ type: SET_SHOW_ALL_ERRORS, payload: show });

// Theme
export const setDarkThemeAction = (show) => ({ type: SET_DARK_THEME, payload: show });

// Developer menu
export const setDevMenuAction = (show) => ({ type: SET_DEV_MENU, payload: show });
