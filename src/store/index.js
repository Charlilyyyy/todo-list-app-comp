import { createStore } from 'vuex'
import * as todoModule from './todo'

export default createStore({
    modules:{
        todo: {
            namespaced: true,
            ...todoModule
        }
    }
})