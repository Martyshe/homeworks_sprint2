const initState = {
  themeId: 1,
};

type initStateType = typeof initState;

export const themeReducer = (
  state: initStateType = initState,
  action: changeThemeIdType
): initStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case action.type:
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number) =>
  ({ type: "SET_THEME_ID", id } as const); // fix any

type changeThemeIdType = ReturnType<typeof changeThemeId>;
