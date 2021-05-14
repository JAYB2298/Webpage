const iState={email:'', naame:'', phone:'',message:''}

const reducer=(state=iState,action)=>{
    if(action.type==='SUBMIT'){
        return iState
    }
    return state
}

export default reducer;