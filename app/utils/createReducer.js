/**
 * Created by Itachi on 2017/1/13.
 */


export default function createReducer(initialStates, reducerHandles) {
    return (state = initialStates, action) => {
        const reducerHandle = reducerHandles[action.type]
        if (!reducerHandle)return state
        return {...state, ...reducerHandle(state, action)}
    }
}