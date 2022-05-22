// TODO: add and export your own actions
export function setVehicles() {
  const url = 'https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars'
  const promise = fetch(url).then(response => response.json());
  return {
    type: 'FETCH_VEHICLES',
    payload: promise
  };
}

export function addCar(content) {
  const url = "https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars";

  const body = {
    id: Math.floor(10 + (Math.random() * 90)),
    brand: "Citroen",
    model: "C3",
    plate: "123AZ56",
    owner: "ssaunier",
    garage: "my-awesome-garage",
    created_at: "2022-05-22T13:48:44.083Z",
    updated_at: "2022-05-22T13:48:44.083Z"
  };

  const promise = fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'Application/jeson'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "MESSAGE_POSTED",
    payload: promise
  };
}
