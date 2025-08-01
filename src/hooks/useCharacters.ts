import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '../api/client';
import { GET_CHARACTERS } from '../graphql/queries';

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export type CharactersResponse = {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: Character[];
  };
};

export const useCharacters = (
  page: number,
  filter: { status?: string; species?: string }
) => {
  return useQuery<CharactersResponse['characters']>({
    queryKey: ['characters', page, filter],
    queryFn: async () => {
      const data = await graphqlClient.request<CharactersResponse>(
        GET_CHARACTERS,
        { page, filter }
      );
      return data.characters;
    },
  });
};
