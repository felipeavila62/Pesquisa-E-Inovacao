import {all, takeLatest} from 'redux-saga/effects';
import { Types } from '~/store/ducks/Recipes'

import {getReceitas} from './Recipes';

export default function* rootSaga() {
  return yield all([takeLatest(Types.GET_RECIPES, getReceitas)]);
}
