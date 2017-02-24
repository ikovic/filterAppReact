import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';

import {
  selectType,
  selectRating,
  toggleGenre,
  selectGroup,
  loadMovies,
  showDetailsModal
} from '../../actions';

import Notifications from './notifications/notifications';
import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';
import './container.scss';

class Container extends PureComponent {

  constructor() {
    super();

    this.toggleSidebarState = this.toggleSidebarState.bind(this);

    this.state = {
      sidebarState: 'closed-sidebar'
    };
  }

  componentWillReceiveProps(nextProps) {
    const {filters, loadMovies} = this.props;
    if (nextProps.filters !== filters) {
      loadMovies(nextProps.filters);
    }
  }

  toggleSidebarState() {
    if(this.state.sidebarState === 'closed-sidebar') {
      this.setState({
        sidebarState: 'opened-sidebar'
      });
    }
    else {
      this.setState({
        sidebarState: 'closed-sidebar'
      });
    }
  }

  render() {
    const {filters, groups, movies, selectType, selectRating, toggleGenre, selectGroup, showDetailsModal} = this.props;
    const filterActions = {selectType, selectRating, toggleGenre};

    return (
      <div id="container">
        <FaBars id="filters-menu-icon" onClick={this.toggleSidebarState}/>
        <aside id="filters-menu-wrapper" className={this.state.sidebarState}>
          <Filters filters={filters} actions={filterActions}/>
        </aside>
        <Notifications/>
        <div id="main-content" className={this.state.sidebarState}>
          <article id="groups-wrapper">
            <Groups groups={groups} selectGroup={selectGroup}/>
          </article>
          <article id="movies-wrapper">
            <Movies movies={movies} showDetailsModal={showDetailsModal}/>
          </article>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  filters: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {filters, groups, movies} = state;
  return {
    filters,
    groups,
    movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectType: type => dispatch(selectType(type)),
    selectRating: rating => dispatch(selectRating(rating)),
    toggleGenre: (genre, add) => dispatch(toggleGenre(genre, add)),
    selectGroup: group => dispatch(selectGroup(group)),
    loadMovies: filters => dispatch(loadMovies(filters)),
    showDetailsModal: movie => dispatch(showDetailsModal(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
