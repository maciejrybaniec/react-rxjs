/** @module Actions */

import Rx from 'rxjs';

export const addTodoSubject = new Rx.Subject();

/**
 * Create todo and publish it in stream.
 * @method addTodo
 * @param {string} taskName Name of the task.
 * @returns {void}
 */
export const addTodo = (taskName) => {
    addTodoSubject.next(taskName);
};
