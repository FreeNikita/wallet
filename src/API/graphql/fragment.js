import { gql } from '@apollo/client';

export const Fragment = {
  history: gql`
        fragment history on History {
            id: String,
            amount: Int,
            title: String,
            category: String,
            subCategory: String,
            date: String,
            description: String,
        }
  `,
};
