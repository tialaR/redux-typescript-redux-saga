/*
  ** COMBINAR TODOS OS REDUCERS DA APLICAÇÃO EM UM ÚNICO REDUCER **
  -> combineReducer
*/

import { combineReducers } from 'redux';

// Reducer de repositories 
import repositories from './repositories';

export default combineReducers({
  repositories,
});

/* 
Duck -> Como é dividido a parte do redux na aplicação. 
        -> Separamos a nossa aplicação por funcionalidade 
        -> A divisão em duck consiste em:
            - Actions
            - Reducer
            - Types
        Por exemplo: repositorie é um duck 
  
  -> Dentro de cada Duck eu tenho geralmente um arquivo de types
  que define por exemplo os types das nossas actions (cada action q/
  podemos disparar através dos componentes e através do SAGA), temos também
  o tipo de informação que guardamos dentro do nosso state do Redux e também
  temos qual é o formato padrão do State dentro de determinado Reducer.
  -> Temos também um arquivo contendo as actions onde as defino de acordo com
  cada type (utilizando a função action do typesafe-actions para melhorar a questão
  da verbosidade do código com relação a utilização dos payloads e tudo mais)
  -> Além disso temos o arquivo de Reducer onde definimos o initial state e a 
  manipulação dos estados de uma determinada forma de acordo com cada actions.abs

  
*/
