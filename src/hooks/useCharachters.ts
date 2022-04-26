import { useState, useEffect } from "react";

import { api } from "../configs/axios";
import { ICharacterProps } from "../interfaces/character.interface";

export function useCharacters() {
  const [characters, setCharacters] = useState<ICharacterProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage((prev) => prev + 1);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrevPage() {
    setPage((prev) => (prev > 0 ? prev - 1 : 1));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await api.get("/character", {
          params: { page },
        });
        setLoading(false);
        setCharacters(response.data.results);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [page]);

  return { characters, loading, error, handleNextPage, handlePrevPage, page };
}
