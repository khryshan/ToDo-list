import React, { Fragment } from 'react';

import './todo-list-style.css';


const Task = props => {
  const { task, markTask, deleteTask } = props;

  const handelCheckbox = () => {
    markTask(task.id)
  }

  const handelDeleteTask = () => {
    deleteTask(task.id)
  }

  return (
    <Fragment>
      <input id={task.id} className="item__check" type="checkbox" onClick={handelCheckbox}/>
      <label htmlFor={task.id} className={`item__task ${task.status && "item--done"}`}>{task.text}</label>
      <button className="item__btn-edit">
        <svg className="btn-edit" viewBox="0 0 64 64" version="1.1" width="40px" height="40px" fill="#cccccc">
          <path d="M 48.097656 3.453125 C 47.0625 3.453125 46.027344 3.828125 45.269531 4.585938 L 41.03125 8.828125 C 40.25 8.046875 38.980469 8.046875 38.203125 8.828125 L 32.546875 14.484375 C 32.167969 14.863281 31.957031 15.367188 31.957031 15.902344 C 31.957031 16.433594 32.167969 16.9375 32.546875 17.3125 L 32.59375 17.363281 L 5.515625 44.398438 C 5.011719 44.902344 4.707031 45.570313 4.648438 46.28125 L 3.972656 54.675781 L 3.269531 59.597656 C 3.222656 59.910156 3.328125 60.222656 3.554688 60.449219 C 3.742188 60.636719 3.996094 60.738281 4.257813 60.738281 C 4.308594 60.738281 4.355469 60.738281 4.402344 60.730469 L 9.320313 60.03125 L 17.765625 59.40625 C 18.484375 59.355469 19.15625 59.046875 19.664063 58.539063 L 46.742188 31.5 C 47.113281 31.847656 47.589844 32.042969 48.101563 32.042969 C 48.636719 32.042969 49.136719 31.835938 49.515625 31.457031 L 55.171875 25.800781 C 55.953125 25.019531 55.953125 23.753906 55.171875 22.972656 L 59.417969 18.730469 C 60.171875 17.972656 60.585938 16.96875 60.585938 15.898438 C 60.585938 14.832031 60.171875 13.824219 59.414063 13.070313 L 50.929688 4.585938 C 50.175781 3.828125 49.136719 3.453125 48.097656 3.453125 Z M 48.097656 5.433594 C 48.617188 5.433594 49.136719 5.621094 49.515625 6 L 58 14.484375 C 58.378906 14.863281 58.585938 15.363281 58.585938 15.898438 C 58.585938 16.433594 58.378906 16.9375 58 17.3125 L 53.757813 21.558594 L 42.441406 10.242188 L 46.6875 6 C 47.0625 5.621094 47.582031 5.433594 48.097656 5.433594 Z M 39.613281 10.242188 L 40.324219 10.949219 L 53.050781 23.675781 L 53.757813 24.386719 L 52.34375 25.796875 C 51.953125 25.40625 51.320313 25.40625 50.929688 25.796875 L 49.515625 27.214844 C 49.125 27.605469 49.125 28.238281 49.515625 28.628906 L 48.101563 30.042969 L 33.957031 15.898438 L 35.371094 14.484375 C 35.566406 14.679688 35.820313 14.777344 36.078125 14.777344 C 36.335938 14.777344 36.589844 14.679688 36.785156 14.484375 L 38.203125 13.070313 C 38.59375 12.679688 38.59375 12.046875 38.203125 11.65625 Z M 41.03125 14.898438 C 40.773438 14.898438 40.519531 14.996094 40.324219 15.191406 L 38.90625 16.605469 C 38.515625 16.996094 38.515625 17.628906 38.90625 18.019531 C 39.101563 18.214844 39.359375 18.3125 39.613281 18.3125 C 39.871094 18.3125 40.128906 18.214844 40.324219 18.019531 L 41.734375 16.605469 C 42.128906 16.214844 42.128906 15.582031 41.734375 15.191406 C 41.539063 14.996094 41.285156 14.898438 41.03125 14.898438 Z M 44.5625 18.4375 C 44.308594 18.4375 44.054688 18.53125 43.859375 18.730469 L 42.441406 20.140625 C 42.050781 20.535156 42.050781 21.164063 42.441406 21.558594 C 42.636719 21.75 42.894531 21.847656 43.152344 21.847656 C 43.40625 21.847656 43.664063 21.75 43.859375 21.558594 L 45.269531 20.140625 C 45.664063 19.75 45.664063 19.121094 45.269531 18.730469 C 45.074219 18.53125 44.820313 18.4375 44.5625 18.4375 Z M 34.011719 18.777344 L 45.324219 30.09375 L 19.027344 56.347656 L 18.074219 51.582031 L 34.664063 34.992188 C 35.054688 34.601563 35.054688 33.96875 34.664063 33.578125 C 34.273438 33.1875 33.644531 33.1875 33.25 33.578125 L 16.65625 50.171875 L 14.300781 49.699219 L 13.828125 47.339844 L 27.59375 33.578125 C 27.988281 33.183594 27.988281 32.554688 27.59375 32.160156 C 27.203125 31.769531 26.574219 31.769531 26.183594 32.160156 L 12.417969 45.925781 L 7.753906 44.996094 Z M 48.101563 21.96875 C 47.84375 21.96875 47.589844 22.066406 47.394531 22.265625 L 45.980469 23.675781 C 45.589844 24.070313 45.589844 24.699219 45.980469 25.09375 C 46.175781 25.285156 46.429688 25.386719 46.6875 25.386719 C 46.945313 25.386719 47.199219 25.285156 47.394531 25.09375 L 48.808594 23.675781 C 49.199219 23.285156 49.199219 22.65625 48.808594 22.265625 C 48.613281 22.066406 48.359375 21.96875 48.101563 21.96875 Z M 32.546875 26.214844 C 32.289063 26.214844 32.035156 26.3125 31.839844 26.503906 L 29.011719 29.332031 C 28.617188 29.726563 28.617188 30.355469 29.011719 30.75 C 29.203125 30.941406 29.460938 31.042969 29.71875 31.042969 C 29.972656 31.042969 30.230469 30.941406 30.421875 30.75 L 33.25 27.921875 C 33.644531 27.527344 33.644531 26.898438 33.25 26.503906 C 33.054688 26.308594 32.800781 26.210938 32.546875 26.214844 Z M 6.609375 46.804688 L 11.894531 47.859375 L 12.46875 50.746094 C 12.550781 51.140625 12.859375 51.449219 13.253906 51.527344 L 16.136719 52.105469 L 17.203125 57.441406 L 9.59375 58 L 6 54.410156 Z "/>
        </svg>
      </button>
      <button className="item__btn-delete" onClick={handelDeleteTask}>
        <svg className="btn-del" viewBox="0 0 50 50" width="40px" height="40px" fill="#cccccc">
          <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z "/>
        </svg>
      </button>
    </Fragment>
  )
}

export default Task;