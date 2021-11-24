export function getRooms() {
  console.log("getRooms")
    return fetch("data/rooms.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }