/*
  ** REDUCER DE REPOSITORIES **
  -> Funcionalidade para lhe dar com a chamada a API dos repositories de forma global
  -> Redux Saga - Realiza a chama a api
*/

import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case RepositoriesTypes.LOAD_REQUEST:
      // Se for uma requisição copio todo o estado e adiciono o loading como true   
      return { 
        ...state, 
        loading: true 
      };
    case RepositoriesTypes.LOAD_SUCCESS:
      // Se a requisição der sucesso
      return { 
        ...state,
        loading: false,
        error: false,
        data: action.payload.data, // Atualizo o data com o valor recebido na chamada a api (no caso o action.payload contém essa resposta)
      };
    case RepositoriesTypes.LOAD_FAILURE:
      // Se a requisição der algum erro
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }
    default: 
      // Padrão
      return state;
  };
};

export default reducer;
