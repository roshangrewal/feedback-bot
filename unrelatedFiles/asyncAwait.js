// write a function to retrieve a blob of json
// make a ajax request! Use the 'fetch' function.
// https://rallycoding.herokuapp.com/api/music_albums

// Async request which returns promises
// function fetchAlbums() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// async and await
// async function fetchAlbums() {
//   const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
//   const json = await res.json()

//   console.log(json);
// }

//async and await with arrow function
const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
