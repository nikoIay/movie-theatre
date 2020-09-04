export function saveStateToLocalStorage(key: string, state: object): object {
    localStorage.setItem(key, JSON.stringify(state));
    return state;
}

export function getStateFromLocalStorage(key: string, defaultState: object): object {
    const fromStorage = localStorage.getItem(key);
    return fromStorage ? JSON.parse(fromStorage) : defaultState;
}
