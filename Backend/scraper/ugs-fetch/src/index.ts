import axios from "axios";

const getChords = async () =>
  axios.get(
    "https://tabs.ultimate-guitar.com/tab/phoebe-bridgers/i-know-the-end-chords-3100499"
  );

getChords().then((c) => console.log(c));
