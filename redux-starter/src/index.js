import store from './store';
import { bugAdded, bugResolved, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(
  bugAdded({
    description: 'Bug1',
  })
);

store.dispatch(bugResolved({ id: 1 }));

store.dispatch(
  bugRemoved({
    id: 1,
  })
);
