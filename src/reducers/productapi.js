
export const productapi = (state=[] ,action)=>{
    
    switch(action.type){
        case 'APIPRODUCTS': {
            
            return [
                ...state,
                {book : action.text}
                    
            ]  
    }
        default:
        return state    
} 
}