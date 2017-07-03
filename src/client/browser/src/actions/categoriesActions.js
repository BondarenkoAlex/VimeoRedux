import {
  CATEGORIES_ALL_GET_REQUEST,
  CATEGORIES_ALL_GET_SUCCESS,
  CATEGORIES_ALL_GET_FAILURE,
} from '../constants';
import { fet } from '../utils/fetchService'

export function getAllCategories() {
  return (dispatch, getState) => {
    dispatch(request(CATEGORIES_ALL_GET_REQUEST));
    const Authorization = 'basic Y2U1MmM1NGQ5YWEwYTUxMWJjZTc3M2ZkZGU3NTg3NDA5NDcyMjY1MDp4ODJFMmVkaU5PTTYyWHVuRldnaFhKaEpIalFuVWE5cG0xWW9NUW05WWFBTXBKNDRMMk5sb0VGakFoK1EvenAxVnZCNFUrYVYyTEhOM0Znd2R4WUwvSE1hZ1Y2TlJXQ2tjNk9BdU1zMjQvSjJVSU9jVzd1YkFRQktTR2c3ZU5xNw==';
    const Accept = 'application/vnd.vimeo.*+json;version=3.2';
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: Authorization,
        Accept: Accept,
      },
    };
    const url = 'https://api.vimeo.com/categories';
    fet(url, options)
      .then(
        (data) => {
          debugger;
        },
        (error) => {
          debugger;
        }
      );
  };
}

function request(type) {
  return {
    type,
  };
}

function action(type, payload) {
  return {
    type,
    payload,
  };
}

