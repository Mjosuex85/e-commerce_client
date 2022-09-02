import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const FILTER_BY_PLATFORMS = "FILTER_BY_PLATFORMS";
export const GET_USERS = "GET_USERS"
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_WISH = "ADD_WISH";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const CLEAR = "CLEAR";
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DESC = "ORDER_DESC"
export const ORDER_BY_RATING = "ORDER_BY_RATING"
export const ORDER_BY_ESRB = "ORDER_BY_ESRB"


const URL = "https://e-commerce-api-pf.herokuapp.com/";
// const URL = "http://localhost:3001/"

export function getAllProducts(){
    return function(dispatch){
        axios.get(`${URL}videogames`)
        .then((res)=>{
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload:res.data
            })
        }
        )
        .catch(err=>console.log(err))
    }
};

export function getGenres(){
    return function (dispatch){
        axios.get(`${URL}genres`)
        .then((res)=>{
            dispatch({
                type: GET_GENRES,
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
};

export function getPlatforms(){
    return function (dispatch){
        axios.get(`${URL}platforms`)
        .then((res)=>{
            dispatch({
                type: GET_PLATFORMS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))
    }
};


export function searchProduct(name){
   if(name){
    return function (dispatch){
        axios.get(`${URL}videogames?name=${name}`)
        .then((res)=>{
            dispatch({
                type: SEARCH_PRODUCT,
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
}else {return"No tiene nombre"}};


export function getUsers(){
    return function (dispatch){
        axios.get(`${URL}users`)
        .then((res)=>{
            dispatch({
                type: GET_USERS,
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
};

export function postUsers(payload){
    return async function(dispatch){
        var createUsers= await axios.post(`${URL}users`);
        return createUsers;
    }
};

// export function filterByGenres(value){
//     return{
//         type:FILTER_BY_GENRES,
//         payload: value
//     }
// } //esto me parece que no funciona asi

export function filterByGenres(value){
    return function(dispatch){
        dispatch({
            type: FILTER_BY_GENRES,
            payload: value
            
        })
    }
}

export function filterByPlatforms(value){
    return function(dispatch){
        dispatch({
            type: FILTER_BY_PLATFORMS,
            payload: value
        })
    }
}

export function addToCart(id){
    return function(dispatch){
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
}
}

export function addWish(id){
    return function(dispatch){
        dispatch({
            type: ADD_WISH,
            payload: id
        })
    }
}


export function setCurrentPage(number){
    return function(dispatch){
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: number
        })
    }
}

export function clear(){
    return function(dispatch){
        dispatch({
            type: CLEAR,
            payload: []
        })
    }
};

export function asc(payload) {
    return {
        type: ORDER_ASC,
        payload
    }
};

export function desc(payload) {
    return {
        type: ORDER_DESC,
        payload
    }
};

export function orderRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    }
};

export function orderEsrb(payload) {
    return {
        type: ORDER_BY_ESRB,
        payload
    }
};



