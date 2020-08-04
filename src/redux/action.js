export const INCREMENT_TYPE = "INCREMENT";
export const DECREMENT_TYPE = "DECREMENT";

export const increment = () => ({
  type: INCREMENT_TYPE,
  payload: {}
});

export const decrement = () => ({
  type: DECREMENT_TYPE,
  payload: {}
});
