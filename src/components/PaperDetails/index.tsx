// src/components/PaperDetails/index.tsx

import styled from 'styled-components';
import { RelatedTweets } from './RelatedTweets';

const PaperDetailsContainer = styled.div`
  /* Add your tailwind or custom CSS here */
`;

export function PaperDetails() {
  return (
    <PaperDetailsContainer>
      <div>PAPER DETAILS CONTENT HERE</div>
      <RelatedTweets />
    </PaperDetailsContainer>
  );
}
