/*
  **  ARQUIVO QUE SERVE PARA UNIR TODOS OS NOSSOS SAGAS
*/

import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga() {
  return yield all([
    // Toda vez q tiver o tipo LOAD_REQUEST sendo disparado será chamado o Saga de load
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);
}