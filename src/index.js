import {createStore} from 'redux';
import counter from './reduser';
import {inc, dec, res} from './actions';

const store = createStore(counter);
const {dispatch} = store;


document.getElementById('inc').addEventListener('click', () => {
    dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
    dispatch(dec())
});

document.getElementById('res').addEventListener('click', () => {
    dispatch(res())
});

//  функция обновляет counter
const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

// при каждом изменении
store.subscribe(update);
