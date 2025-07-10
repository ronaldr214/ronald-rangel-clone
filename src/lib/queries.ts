import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($first: Int = 6) {
    posts(first: $first) {
      nodes {
        id
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;