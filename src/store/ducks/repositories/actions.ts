/*
  ACTIONS - FUNÇÕES Q/ DISPARAM OS TYPES
*/

//Ajuda a manter as actions mais légiveis (menos verbosas) de acordo com as regras do typescript
import { action } from 'typesafe-actions'; 

import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

//Recebe os dados q/ recebemos da API
//O resultado vai passar pelo reducer
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);