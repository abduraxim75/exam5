import fetch from 'node';
import db from '../server/db.json'

export const setProducts = () => async (dispatch) => {
    const response = await fetch('db.json');
    const data = await response.json();
    dispatch({ type: 'SET_PRODUCTS', payload: data });
};