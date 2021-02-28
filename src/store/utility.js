export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const serverUrl = (skip, limit) =>
  `http://80.240.21.204:1337/news?skip=${skip}&limit=${limit}`;
// export const serverUrl = "http://80.240.21.204:1337/news?skip=1&limit=1";
