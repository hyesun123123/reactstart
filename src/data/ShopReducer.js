import {ActionTypes} from "./Types";
export const ShopReducer = (stortData, action)=>{
    switch(action.type){
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]:action.payload.data
            };
        defalut:
        return storeData || {};
    }
}