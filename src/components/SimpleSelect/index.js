import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import useStyles from './styles';

const SimpleSelect = ({
  id,
  label,
  value,
  onChange,
  list,
  native,
  disabled,
  hasError,
}) => {
  const classes = useStyles();

  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      disabled={disabled}
      error={hasError && true}
    >
      <InputLabel ref={inputLabel} htmlFor={`${id}-simpleSelect`}>
        {label}
      </InputLabel>
      <Select
        native={native}
        value={value}
        onChange={onChange}
        inputProps={{
          name: `${id}-simpleSelect`,
          id: `${id}-simpleSelect`,
          'data-testid': 'select',
        }}
        labelWidth={labelWidth}
      >
        <option aria-label={label} value="" />
        {list.map(({ code, value: val }) => (
          <option value={code} key={code}>
            {val}
          </option>
        ))}
      </Select>
      {hasError && <FormHelperText>{hasError}</FormHelperText>}
    </FormControl>
  );
};

SimpleSelect.propTypes = {
  disabled: PropTypes.bool.isRequired,
  hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({})),
  native: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

SimpleSelect.defaultProps = {
  list: [],
};

export default SimpleSelect;
