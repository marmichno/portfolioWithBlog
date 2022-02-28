// styled
import {
  StyledHeroContainer,
  StyledHeaderWrapper,
  StyledImageWrapper,
  StyledButtonWrapper,
} from './HeroStyled';
// mui
import { Typography, Button } from '@mui/material';
// mui icons
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedIcon from '@mui/icons-material/Feed';

export const Hero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeaderWrapper>
        <Typography variant="h1" component="h1">
          Hi, I'm <span style={{ color: '#1976d2' }}>Marcin</span>
        </Typography>
        <Typography variant="h5" component="h2">
          Selftaught frontend developer
        </Typography>
        <Typography variant="body1" component="p">
          Courteous and enthusiastic, I am interested in IT and everything in
          its orbit especially coding. Presently looking for job or internship
          as junior frontend dev.
        </Typography>
        <StyledButtonWrapper>
          <Button variant="contained" endIcon={<FeedIcon />}>
            My resume
          </Button>
          <Button variant="contained" endIcon={<GitHubIcon />}>
            Github profile
          </Button>
          <Button variant="contained" endIcon={<MailOutlineIcon />}>
            Contact
          </Button>
        </StyledButtonWrapper>
      </StyledHeaderWrapper>
      <StyledImageWrapper></StyledImageWrapper>
    </StyledHeroContainer>
  );
};
