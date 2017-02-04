/** @module Store */

import Rx from 'rxjs';

import { addTodoSubject } from '../Actions';

let state = {
    todos: []
};

const subject = new Rx.ReplaySubject(1);

addTodoSubject.subscribe((taskName) => {
    const { todos } = state;
    state = {
        ...state,
        todos: todos.concat([taskName])
    };

    subject.next(state);
});

subject.next(state);

export default subject;
