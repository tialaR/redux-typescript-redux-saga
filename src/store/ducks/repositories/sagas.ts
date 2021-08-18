/*
  ** ARQUIVO DE CONFIGURAÇÃO DO REDUX SAGA **
*/

import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';

// Função generator para carregar as informações do Github (os repositories)
export function* load() {
  try {
    // Chamada a api com redux-saga
    const response = yield call(api.get, 'users/diego3g/repos');

    // Se tudo deu certo chamo o loadSuccess passando os repositories
    yield put(loadSuccess(response.data));
  } catch {
    // Se algo deu errado chamo o loadFailure
    yield put(loadFailure());
  }
}
