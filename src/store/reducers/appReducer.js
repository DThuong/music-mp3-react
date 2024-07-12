import actionType from "../../store/actions/actionType";

const initState = {
    homeData: [],
    test: "hello123"
}
const appReducer = (state = initState, action) => {
    switch (actionType){
        case actionType.GET_HOME: {
            return state;
        }
        default: {
            return state;   
        }
    }
}

export default appReducer;