// components/PaperList/index.tsx

import { FunctionComponent } from 'react';
import { Paper } from '../../lib/model/Paper';
import dummyPapers from '../../lib/dummy/dummyPapers';
import { PaperItem } from './PaperItem';

type PaperListProps = {
  papers: Paper[];
};

const PaperList: FunctionComponent<PaperListProps> = ({ papers }) => {
  return (
    <div>
      {papers.map((paper) => (
        <PaperItem key={paper.id}>
          <h2>{paper.title}</h2>
          <p>{paper.abstract}</p>
        </PaperItem>
      ))}
    </div>
  );
};

export default PaperList;
