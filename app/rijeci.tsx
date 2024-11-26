import React from "react";

export type Levels =
  | "3_glasa"
  | "4_glasa_pravilna"
  | "4_glasa_konsonantske"
  | "5_glasa"
  | "5_glasa_konsonantske";

export const rijeci: Record<Levels, string[]> = {
  "3_glasa": [
    "bor",
    "bik",
    "duh",
    "gol",
    "lav",
    "luk",
    "miš",
    "mak",
    "nos",
    "pas",
    "puž",
    "rak",
    "ris",
    "rep",
    "sat",
    "sir",
    "sok",
    "tuš",
    "vuk",
    "val",
    "vol",
    "zid",
  ],
  "4_glasa_pravilna": [
    "buba",
    "bere",
    "beba",
    "baba",
    "cura",
    "duda",
    "čaša",
    "guma",
    "gura",
    "kuka",
    "kuća",
    "kino",
    "kada",
    "kapa",
    "kopa",
    "koza",
    "koža",
    "lupa",
    "lane",
    "laje",
    "lija",
    "leti",
    "lice",
    "ljulja",
    "ljeto",
    "ljubi",
    "ljudi",
    "maca",
    "more",
    "maše",
    "mete",
    "moli",
    "mapa",
    "voće",
    "voda",
    "vino",
    "vozi",
    "zima",
    "zeko",
    "zubi",
    "zelje",
    "žaba",
    "žuta",
    "žito",
    "žena",
  ],
  "4_glasa_konsonantske": [
    "brod",
    "brdo",
    "brzo",
    "crvi",
    "drvo",
    "grlo",
    "grba",
    "kralj",
    "krov",
    "krug",
    "križ",
    "kruh",
    "kist",
    "list",
    "mrak",
    "mrav",
    "most",
    "prst",
    "prah",
    "srna",
    "zmaj",
  ],
  "5_glasa": [
    "balon",
    "bager",
    "bazen",
    "bunar",
    "bubanj",
    "češalj",
    "dupin",
    "deset",
    "čekić",
    "galeb",
    "gusar",
    "jelen",
    "jedan",
    "lokot",
    "limun",
    "kolač",
    "kaput",
    "kokoš",
    "kuhar",
    "lonac",
    "lovac",
    "labud",
    "tigar",
  ],
  "5_glasa_konsonantske": [
    "bačva",
    "baklja",
    "barka",
    "biljka",
    "brava",
    "blato",
    "cigla",
    "cikla",
    "čizme",
    "guska",
    "hlače",
    "kocka",
    "krava",
    "lopta",
    "metla",
    "maska",
    "mreža",
    "oblak",
    "palma",
    "pegla",
    "slova",
    "sunce",
    "šljiva",
    "torta",
  ],
};

const Rijeci: React.FC = () => {
  return (
    <div>
      <h1>Riječi</h1>
      <div>
        {Object.keys(rijeci).map((level) => (
          <div key={level}>
            <h2>{level}</h2>
            <ul>
              {rijeci[level as Levels].map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rijeci;
