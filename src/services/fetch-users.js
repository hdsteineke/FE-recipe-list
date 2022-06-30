
export async function signInUser({ email, password }) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password })
  });
  return resp.json();
}

export async function signUpUser({ email, password }) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ email, password })
  });
  return resp.json();
}

export async function getUser() {
  try {
    const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    console.log('resp', resp);
    if (!resp.body.locked) return null;
    return resp.json();
  } catch (error) {
    return null;
  }
}