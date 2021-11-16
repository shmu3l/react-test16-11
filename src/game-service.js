/**
 * This file handles all the communication with the server.
 * The different endpoints are described in server.js.
 */
const apiUrl = "http://localhost:3000";

const defaultPostOptions = (method) => {
  return {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
};

export async function getGames() {
  const resp = await fetch(`${apiUrl}/game`);
  return await resp.json();
}

export async function deleteGame(gameId) {
  const requestOptions = {
    ...defaultPostOptions("DELETE"),
  };
  const resp = await fetch(`${apiUrl}/game/${gameId}`, requestOptions);
  return await resp.json();
}

export async function getSingleGame(gameId) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, { method: "GET" });
  return await resp.json();
}

export async function postNewGame(newGameObj) {
  const requestOptions = {
    ...defaultPostOptions("POST"),
    body: JSON.stringify(newGameObj),
  };
  const resp = await fetch(`${apiUrl}/game/`, requestOptions);
  if (!resp.ok) {
    const message = `An error has occurred on adding new game: ${resp.status}`;
    throw new Error(message);
  }
  return await resp.json();
}

export async function editGame(gameId, editGameObj) {
  const requestOptions = {
    ...defaultPostOptions("PUT"),
    body: JSON.stringify(editGameObj),
  };
  const resp = await fetch(`${apiUrl}/game/${gameId}`, requestOptions);
  return await resp.json();
}
