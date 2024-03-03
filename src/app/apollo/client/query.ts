import gql from "graphql-tag";

export const GET_TODOS = gql`
query GetToDos {
  getToDos {
    _id
    title
    description
    status
  }
}
`;