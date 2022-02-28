// styled
import {
  StyledAboutMeContainer,
  StyledBackground,
  StyledBackgroundTextWrapper,
  StyledBackgroundText,
  StyledImageWrapper,
  StyledTextWrapper,
} from './AboutMeStyled';
// mui
import { Typography } from '@mui/material';

export const AboutMe = () => {
  return (
    <StyledAboutMeContainer>
      <StyledBackground>
        <StyledBackgroundTextWrapper>
          <StyledBackgroundText>About me</StyledBackgroundText>
        </StyledBackgroundTextWrapper>
        <StyledBackgroundTextWrapper>
          <StyledBackgroundText>About Me</StyledBackgroundText>
        </StyledBackgroundTextWrapper>
      </StyledBackground>
      <StyledImageWrapper />
      <StyledTextWrapper>
        <Typography variant="body1" component="p">
          My adventure with programming started in highschool where I learned
          basics of technologies like CSS, HTML, JavaScript and PHP.
        </Typography>
        <Typography variant="body1" component="p">
          After graduation I started my career at Exorigo-Upos as Service Desk
          Consultant which gave me opportunity to expand my soft skills and also
          learn how to work in company enviroment, administrate Windows/Windows
          server, maintain hardware, provide customer support and solve clients
          problems with POS applications.
        </Typography>
        <Typography variant="body1" component="p">
          For last two years im constantly expanding my knowledge in frontend
          field - more informations below.
        </Typography>
      </StyledTextWrapper>
    </StyledAboutMeContainer>
  );
};
