import { quadrantNames, TaskQuadrant } from './typings';

const emptyStore: TaskQuadrant[] = quadrantNames.map((quadrant) => {
  return { name: quadrant, tasks: [] };
});
export const loadFromLocalStorage = (): TaskQuadrant[] => {
  try {
    const localStorageStore = localStorage.getItem('store');
    if (localStorageStore === null) return emptyStore;
    return JSON.parse(localStorageStore);
  } catch (e) {
    console.warn(e);
    return emptyStore;
  }
};

export const saveToLocalStorage = (state: TaskQuadrant[]) => {
  try {
    localStorage.setItem('store', JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
};
