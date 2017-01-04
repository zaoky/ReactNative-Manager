import { actionCreator } from './actionCreator';

export const emailChanged = actionCreator<{text: string}>("email_changed");

export const passwordChanged = actionCreator<{text: string}>("password_changed");