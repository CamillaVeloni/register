import { gql } from '@apollo/client';

// Mutation para login na api
export const LOGIN_MUTATION = gql`
mutation login($input: UsersPermissionsLoginInput!){
    login(input:$input){
      jwt
      user {
        id
        username
      }
    }
}
`;
