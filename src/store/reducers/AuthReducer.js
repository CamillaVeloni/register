const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    loading: false,
    erro: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
