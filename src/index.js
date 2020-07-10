import {createStore} from 'redux';

// функция редюсер
const counter = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return 0;
        default:
            return state;
    }
}

const store = createStore(counter);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec())
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch(res())
});

//  функция обновляет counter
const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

// при каждом изменении
store.subscribe(update);
