/*
  ** ARQUIVO DE CONFIGURAÇÃO DO ESTADO DA APLICAÇÃO DE FORMA GLOBAL **

  -> Arquivo que armazena o estado global da aplicação (o store)
*/

import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
}

// Criando middleware do redux saga
const sagaMiddleware = createSagaMiddleware();

// Configurando Store do redux com middleware do redux saga
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

/*
   applyMiddleware(sagaMiddleware) -> Adicionando o sagaMiddleware dentro do nosso Redux
*/