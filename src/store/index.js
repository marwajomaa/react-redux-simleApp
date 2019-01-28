// redux have only one store then there' no need for dispacher, the store will dispacch the actions directly
// having one store means that all state will be located in one place means all data can be store in single object
// one object doesn't sound very modular
// but with redux modularity is obtianed through functions
// instead of breaking state into different objects, we use functions to manage every part of the state
// these functions should be (pure, immutable, compose)

import { createStore } from 'redux'
import {rootReducers} from '../reducers'

export const store = createStore(rootReducers)
