import dummyData from "../dummyData"

const initialState = {
  user: null,
  courses: dummyData.courses,
  modules: dummyData.modules,
  videos: dummyData.videos,
  teachers: dummyData.teachers
}

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}

export default rootReducer