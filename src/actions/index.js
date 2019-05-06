let nextaction = 0;
export const actioncreators = (text) => {
    return{
        type : 'APIPRODUCTS',
        text : text,
        id : nextaction+1
    }
        

}