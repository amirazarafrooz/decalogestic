// src/hooks/useCharacters.ts
import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '../api/client';
import { GET_CHARACTERS } from '../graphql/queries';

export const useCharacters = (
  page: number,
  filter: { status?: string; species?: string }
) => {
  return useQuery({
    queryKey: ['characters', page, filter],
    queryFn: async () => {
      const data = await graphqlClient.request(GET_CHARACTERS, {
        page,
        filter,
      });
      return data.characters; 
    },
  });
};
