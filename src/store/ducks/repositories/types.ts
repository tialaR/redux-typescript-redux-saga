/* 
  ** ACTION TYPES **
  -> Formato das actions
  -> Tipo de actions do reducer de repositories
*/
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}
/* LOAD_REQUEST -> Action que o componente vai disparar p/ carregar os repositórios
  da api e isso vai ser ouvido pelo Redux Saga que vai fazer a chamada na API e 
  depois vai disparar o LOAD_SUCCESS ou o LOAD_FAILURE baseado se teve sucesso ou
  não lá na API. */

/*
  ** DATA TYPES **
  -> Formato da informação que vai estar dentro do Reducer (tipo dado)
  -> Formato do dado armazenado no reducer
*/
export interface Repository {
  id: number;
  name: string;
}

/* 
  ** STATE TYPES **
  -> Formato do estado do reducer de repositories
*/
export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}