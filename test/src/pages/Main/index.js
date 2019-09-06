import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {Types} from '~/store/ducks/Recipes'

import {Container, Title} from './styles';

function Main() {
  const [title, setTitle] = useState('');

  const state = useSelector(state => state.Recipes);
  

  const dispatch = useDispatch();



  useEffect(() => {
    async function getTitle() {
      await setTitle('RN LINX TEMPLATE');
      dispatch({type:Types.GET_RECIPES})
    }

    getTitle();
  }, [title]);

  return (
    <Container>
      <Title>{title}</Title>
      {state.loading &&
        <ActivityIndicator size='large' color='#000'/>
      }
      
    </Container>
  );
}

export default Main;
