import { gql } from '@apollo/client';

// Mutation para login na api
export const LOGIN_MUTATION = gql`
mutation login($input: UsersPermissionsLoginInput!){
    login(input:$input){
      jwt
    }
}
`;

export const FETCHING_USER = gql`
query {
  me {
    id
    username
    role {
      name
    }
  }
}
`;

export const REGISTERED_TIMES = gql`
query {
  registeredTimes {
    id
    timeRegistered
    user {
      id
      name
      role {
        name
      }
    }
  }
}
`;

export const CREATE_REGISTERED_TIME = gql`
mutation createRegisteredTime($input:createRegisteredTimeInput) {
  createRegisteredTime(input:$input){
    registeredTime {
      id
    }
  }
}
`;
