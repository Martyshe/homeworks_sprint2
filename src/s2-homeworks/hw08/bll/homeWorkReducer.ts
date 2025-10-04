import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  const newState = [...state];
  switch (action.type) {
    case "sort": {
      if (action.payload === "up") {
        return newState.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return newState.sort((a, b) => b.name.localeCompare(a.name));
      }
    }
    case "check": {
      return state.filter((people) => people.age >= action.payload);
    }
    default:
      return state;
  }
};
