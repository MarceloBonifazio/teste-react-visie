import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

import SimpleSelect from '../SimpleSelect';
import List from '../List';

import useStyles from './styles';

const App = () => {
  const styles = useStyles();

  const [state, setState] = useState({
    data: [],
    error: false,
    loading: true,
    person: '',
    fieldError: false,
  });

  useEffect(() => {
    async function fetchApi() {
      const baseUrl = 'https://swapi.co/api/people';
      try {
        const {
          data: { results: data },
        } = await axios.get(baseUrl);
        data
          .sort((prev, next) => prev.name.localeCompare(next.name))
          .forEach(el => {
            el.id = uuid();
          });
        setState({ ...state, data, loading: false });
      } catch (err) {
        setState({ ...state, error: true, loading: false });
      }
    }
    fetchApi();
    // eslint-disable-next-line
  }, []);

  const removeItem = id => {
    if (!id) {
      setState({ ...state, fieldError: 'Escolha um item para excluir' });
      return;
    }
    setState({
      ...state,
      person: '',
      data: state.data.filter(item => item.id !== id),
    });
  };

  const handleSelect = field => event => {
    setState({ ...state, [field]: event.target.value, fieldError: false });
  };

  if (state.loading) {
    return (
      <>
        <div>
          Carregando...
          <LinearProgress />
        </div>
      </>
    );
  }

  if (state.error) {
    return (
      <Container className={styles.root}>
        <Paper className={styles.error}>Erro ao pesquisar dados</Paper>
      </Container>
    );
  }

  return (
    <Container className={styles.root}>
      <Grid className={styles.container} container spacing={2}>
        <Grid item xs={12}>
          <SimpleSelect
            hasError={state.fieldError}
            disabled={state.data.length === 0}
            id="person"
            label="Remover Item"
            list={state.data.map(({ name: value, id: code }) => ({
              code,
              value,
            }))}
            native
            onChange={handleSelect('person')}
            value={state.person}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            fullWidth
            disabled={state.data.length === 0}
            onClick={() => removeItem(state.person)}
            variant="contained"
          >
            excluir
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List items={state.data} removeItem={removeItem} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
