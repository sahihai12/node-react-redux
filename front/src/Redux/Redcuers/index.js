import { combineReducers } from "redux"
import UserReducer from "./user.reducer"
import BlogReducer from "./blog.reducer"
import themeReducer from "./theme.reducer"

const rootReducer = combineReducers({
  theme:themeReducer,
    user: UserReducer,
    blog: BlogReducer,
  })
  
export default rootReducer