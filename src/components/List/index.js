import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import Person from '../Person';
import useStyles from '../styles';

const List = ({ items, removeItem }) => {
  const styles = useStyles();

  if (items.length === 0) {
    return <Paper className={styles.root}>Lista vazia</Paper>;
  }

  return items.map(({ name, eye_color: color, id }) => (
    <Person
      key={uuid()}
      name={name}
      color={color}
      id={id}
      removeItem={removeItem}
    />
  ));
};

List.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({})),
  removeItem: PropTypes.func.isRequired,
};

List.defaultProps = {
  item: [],
};

export default List;
