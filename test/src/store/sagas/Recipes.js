import {call, put} from 'redux-saga/effects';
import {Types, Actions} from '~/store/ducks/Recipes';
import api from '~/services/api';



export function* getReceitas(action){
    try{
        const response = yield call(api.get,'/receitas');
        yield put(Actions.carregarDadosSucesso(response.data))
    }catch(err){
        yield put(Actions.carregarDadosSucesso(response.data))

    }

}