const initState = {
  themeId: 1,
};

export const themeReducer = (state = initState, action: any): any => {
  // fix any
  switch (action.type) {
    // дописать

    default:
      return state;
  }
};

export const changeThemeId = (id: number): changeThemeIdType =>
  ({ type: "SET_THEME_ID", id } as const); // fix any

type changeThemeIdType = {
  type: string;
  id: number;
};
