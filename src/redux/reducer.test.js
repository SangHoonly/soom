import {
  addTodo,
  deleteTodo,
  completeTodo,
  setTaskTitle,
  addMission
} from './actions';

import reducer from './reducer';

describe('reducer', () => {
  it('setTasktitle', () => {
    const initialState = { taskTitle: '' };

    const state = reducer(initialState, setTaskTitle('밥먹기'));

    expect(state.taskTitle).toBe('밥먹기');
  });

  it('addTodo', () => {
    const initialState = {
      id: 100,
      taskTitle: '밥먹기',
      tasks: [],
    };

    const state = reducer(initialState, addTodo());

    expect(state.tasks).toHaveLength(1);
  });

  it('deleteTodo', () => {
    const initialState = {
      tasks: [
        { id: 100, taskTitle: '밥먹기', done: false },
        { id: 101, taskTitle: '눕기', done: true },
      ],
    };

    const state = reducer(initialState, deleteTodo(101));

    expect(state.tasks).toHaveLength(1);
  });

  it('completeTodo', () => {
    const initialState = {
      tasks: [
        { id: 100, taskTitle: '밥먹기', done: false },
        { id: 101, taskTitle: '눕기', done: true },
      ],
    };

    const state = reducer(initialState, completeTodo(100));

    expect(state.tasks[0].done).toBeTruthy();
    expect(state.tasks.length).toEqual(initialState.tasks.length);
  });

  it('addMission', () => {
    const initialState = {
      id: 102,
      tasks: [
        { id: 100, taskTitle: '밥먹기', done: false },
        { id: 101, taskTitle: '눕기', done: true },
      ],
    };
    
    const mission = {
      tasks: ['물론 씻은 뒤 분리배출하기', '이면지 사용하기']
    };

    const state = reducer(initialState, addMission(mission));

    expect(state.tasks.length).toEqual(4);
    expect(state.tasks[2].title).toBe('물론 씻은 뒤 분리배출하기');
    expect(state.tasks[3].title).toBe('이면지 사용하기');
  })
});