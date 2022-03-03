export const ADD_TO_FAV= 'ADD_TO_FAV'
export const REMOVE_FROM_FAV= 'REMOVE_FROM_FAV'
export const GET_FETCHED_BOOKS= 'GET_FETCHED_BOOKS'
export const FETCHED_BOOKS_ERROR= 'GET_FETCHED_BOOKS'
export const GET_FETCHED_BOOKS_LOADING= 'GET_FETCHED_BOOKS_LOADING'


export const addToFav = (company) => ({
    type: ADD_TO_FAV,
    payload: company
})

export const removeFromFav = (company) => ({
    type: REMOVE_FROM_FAV,
    payload: company
})

export const getJobs = (query) => {
  return (dispatch) => {
      setTimeout(async()=>{
          try {
              let serachQuery = query? query : ""
            const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search='+ serachQuery  +  '&limit=20')
           if(response.ok){
            const { data } = await response.json()
            dispatch({
                type: GET_FETCHED_BOOKS,
                payload:  data
            })
            dispatch({
                type: GET_FETCHED_BOOKS_LOADING,
            })
           }else{
            console.log('error happened fetching the books')
            dispatch({
                type: FETCHED_BOOKS_ERROR,
            })
           }
          } catch (error) {
            dispatch({
                type: FETCHED_BOOKS_ERROR,
            })
          }
      }, 1000)
  }

}

// type: GET_FETCHED_BOOKS,

