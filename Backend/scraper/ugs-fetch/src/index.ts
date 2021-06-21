import axios from "axios";

const getChords = async () =>
  axios.get(
    "https://tabs.ultimate-guitar.com/tab/phoebe-bridgers/i-know-the-end-chords-3100499"
  );

function ripOut(
  text: string,
  startWord: string,
  endWord: string,
  includeFirstWord?: boolean,
  includeLastWord?: boolean
): string {
  includeFirstWord =
    includeFirstWord !== null && includeFirstWord !== undefined
      ? includeFirstWord
      : true;
  includeLastWord =
    includeLastWord !== null && includeLastWord !== undefined
      ? includeFirstWord
      : true;

  const i =
    text.indexOf(startWord) + (!includeFirstWord ? startWord.length : 0);

  console.log(i);

  const sinceFirst = text.substring(
    text.indexOf(startWord) + (!includeFirstWord ? startWord.length : 0),
    text.length
  );

  sinceFirst;

  return sinceFirst.substr(
    0,
    sinceFirst.indexOf(endWord) + (includeLastWord ? endWord.length : 0)
  );
}

function ripOutWithRegex(
  text: string,
  startRegex: RegExp,
  endRegex: RegExp
): string {
  const sinceFirst = text.substring(text.search(startRegex), text.length);

  sinceFirst;

  return sinceFirst.substr(0, sinceFirst.search(endRegex));
}

async function parseChords() {
  const chords = await getChords();

  if (!chords) return;

  const raw: string = chords.data;

  const body = ripOut(raw, "<body", "</body");

  body;

  // console.log(body);
  const chordsRaw = ripOut(
    body,
    `;content&quot;:&quot;`,
    "&quot",
    false,
    false
  );
  chordsRaw;

  console.log(chordsRaw);
}

parseChords();
