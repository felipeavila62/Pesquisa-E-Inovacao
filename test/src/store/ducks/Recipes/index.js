//types,reducers e actions

export  const Types = {
    "GET_RECIPES" : "Recipes/GET_RECIPES",
    "GET_RECIPES_SUCESSO" : "Recipes/GET_RECIPES_SUCESSO",
    "GET_RECIPES_ERROR" : "Recipes/GET_RECIPES_ERROR"

};

//definiu tudo que vai ter no nosso state
const INITIAL_STATE = {
    data:[],
    title: null,
    loading: false,
    error: '',
};

//function
//state e action
export default function receitas(state = INITIAL_STATE, action){
    switch(action.type){
        case Types.GET_RECIPES:
            return {...state, loading: true, error: '' }
        case Types.GET_RECIPES_SUCESSO:
            return{ ...state, loading: false, error: '', data:action.payload.parametro}
        case Types.GET_RECIPES_ERROR:
            return{ loading: false, error: action.payload.erro, ...state}
            default:
                return state
    }
}

export const Actions = {
    carregarReceitas: () => ({
        type: Types.GET_RECIPES,
    }),
    carregarDadosSucesso: parametro => ({
        type: Types.GET_RECIPES_SUCESSO,
        payload:{
            parametro,
        }
    }),
    carregarReceitas: erro => ({
        type: Types.GET_RECIPES_ERROR,
        payload:{
            erro,
        }
    }),
};