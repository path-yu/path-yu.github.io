 export default function themeReducer (state, action) {
    if (!state) return {
      themeName: 'Red Theme',
      themeColor: 'red'
    }
    switch (action.type) {
      case 'UPATE_THEME_NAME':
        return { ...state, themeName: action.themeName }
      case 'UPATE_THEME_COLOR':
        return { ...state, themeColor: action.themeColor }
      default:
        return state
    }
  }
