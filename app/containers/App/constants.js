/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const SAVE_ENTRY = 'boilerplate/App/SAVE_ENTRY';
export const SAVE_ENTRY_SUCCESS = 'boilerplate/App/SAVE_ENTRY_SUCCESS';
export const SAVE_ENTRY_ERROR = 'boilerplate/App/SAVE_ENTRY_ERROR';
export const LOAD_JOURNAL = 'boilerplate/App/LOAD_JOURNAL';
export const LOAD_JOURNAL_SUCCESS = 'boilerplate/App/LOAD_JOURNAL_SUCCESS';
export const LOAD_JOURNAL_ERROR = 'boilerplate/App/LOAD_JOURNAL_ERROR';
