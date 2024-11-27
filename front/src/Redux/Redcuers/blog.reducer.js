import { FETCH_BLOGS_FAILURE , FETCH_BLOGS_SUCCESS , FETCH_BLOGS_REQUEST  , CREATE_BLOGS_FAILURE , CREATE_BLOGS_SUCCESS} from "../constants/blog.constant"


const initialState = {
    blogs : [],
    error : [],
    loading: false
}

const BlogReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_BLOGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
                error: []
            }
        case FETCH_BLOGS_FAILURE:
            return {
                loading: false,
                blogs: [],
                error: action.payload
            }
        case CREATE_BLOGS_SUCCESS:
            console.log('blog single data is ' , action.payload)
            return {
                loading: false,
                blogs : action.payload,
                error: []
            }
        case CREATE_BLOGS_FAILURE:
            return {
                loading: false,
                blog: [],
                error: action.payload
            }
        default: return state
    }
}

export default BlogReducer