const initState ={
    user:1
}
 function a(state:any=initState,action:any) {
    switch(action.type){
        case 'getUser':
            return state.user
        case 'setUser':
            state.user = 22222
            return action.payload
    }
}
export default a
