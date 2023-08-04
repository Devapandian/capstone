const url = "http://localhost:3200/v1/movie";

export const GetMovies = async () => {
  let response;
  try {
    response = await fetch(`${url}`, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 400) {
    return await response.json();
  } else {
    let message = await response.json();
    throw new Error(message.err);
  }
};
export const getMovieByid = async (id) => {
  let response;
  try {
    response = await fetch(`${url}/${id}`, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 400) {
    return await response.json();
  } else {
    let message = await response.json();
    throw new Error(message.err);
  }
};
