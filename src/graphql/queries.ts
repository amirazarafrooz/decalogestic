export const GET_CHARACTERS = `
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;