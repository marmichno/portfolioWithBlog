import {
  StyledStatisticsContainer,
  StyledBackgroundWrapper,
  StyledCardsWrapper,
  StyledCard,
} from './StyledStatistics';
// mui
import { Typography } from '@mui/material';
// icons
import { SiCodewars } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineProject } from 'react-icons/ai';

export const Statistics = () => {
  return (
    <StyledStatisticsContainer>
      <StyledBackgroundWrapper />
      <StyledCardsWrapper>
        <StyledCard>
          <SiCodewars />
          <Typography variant="h4" component="h4">
            96 completed coding tasks
          </Typography>
        </StyledCard>
        <StyledCard>
          <AiOutlineProject />
          <Typography variant="h4" component="h4">
            18 created projects
          </Typography>
        </StyledCard>
        <StyledCard>
          <AiFillGithub />
          <Typography variant="h4" component="h4">
            367 total contributions
          </Typography>
        </StyledCard>
      </StyledCardsWrapper>
    </StyledStatisticsContainer>
  );
};
