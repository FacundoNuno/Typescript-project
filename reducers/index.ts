type Action = {
    type: string;
    payload?: any;
};

const initialState = {
    counter: 1,
};

function rootReducer(state = initialState, action: Action) {
    switch (action.type) {
        // manejar diferentes tipos de acciones aquí
        default:
            return state;
    }
}

export default rootReducer;