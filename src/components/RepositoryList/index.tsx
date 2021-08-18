import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';

import * as RespositoriesActions from '../../store/ducks/repositories/actions';

// Props do state
interface StateProps {
  repositories: Repository[]; 
}

// Props das ações dispatch
interface DispatchProps {
  loadRequest: () => void;
}

// Props do próprio componente
interface OwnProps {

}

// Todas as props juntas
type Props = StateProps & DispatchProps & OwnProps;

const RepositoryList = ({ repositories }: Props) => {  
  return (
    <div>
      <ul>
        {repositories.map(repository => <li key={repository.id}>{repository.name}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RespositoriesActions, dispatch);

// Conectando o componente com o Redux
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);