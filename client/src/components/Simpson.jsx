import { useState } from "react";

const Simpson = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const api = await fetch(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=4`
    );
    const data = await api.json();
    console.log(data);
    return data;
  };

  const handleFetchCharacters = async () => {
    const charactersData = await getCharacters();
    console.log(charactersData);
    setCharacters(charactersData);
  };

  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <button className="focus:outline-none text-4xl mb-10 mt-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 me-2 dark:focus:ring-yellow-900" onClick={handleFetchCharacters}>Traer personajes</button>
      {characters.length > 0 && (
        <div className="flex flex-row gap-10 justify-center">
          {characters.map((character, index) => (
          <div
            key={index}
            className="max-w-sm w-[300px] bg-white border flex flex-col items-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg p-5 " src={character.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {character.character}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {character.quote}
              </p>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Simpson;
