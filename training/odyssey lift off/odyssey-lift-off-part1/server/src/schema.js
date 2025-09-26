import { gql } from 'graphql-tag';

const typeDefs = gql`
    # Schema defs go here

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

`;

export default typeDefs