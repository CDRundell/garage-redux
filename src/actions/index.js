// TODO: add and export your own actions
export function setVehicles() {
  const url = 'https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars'
  const promise = fetch(url).then(response => response.json());
  return {
    type: 'FETCH_VEHICLES',
    payload: promise
  };
}
