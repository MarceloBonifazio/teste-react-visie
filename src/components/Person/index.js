import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

const Person = ({ color, name, removeItem, id }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.root} style={{ color }}>
      <IconButton aria-label="Remove" onClick={() => removeItem(id)}>
        <DeleteIcon />
      </IconButton>
      {name}
    </Paper>
  );
};

Person.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Person.defaultProps = {
  color: '',
  id: '',
  name: '',
};

export default Person;
