


export const initialState = {count : 0, name : "Ani"}


export const testReducer = (state, action) => {
   if(action.type === "decrement"){
    return {...state, count : state.count - 1}
   }
   else if(action.type === "increment"){
    return {...state, count : state.count + 1}
   }
   else if(action.type === "changeName"){
    return {...state, name: action.payload.name}
   }
}

