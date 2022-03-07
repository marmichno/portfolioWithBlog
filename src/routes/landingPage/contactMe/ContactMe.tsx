// styled
import {
  StyledContactMeContainer,
  StyledImageWrapper,
  StyledContactWrapper,
  StyledContactDataWrapper,
} from './StyledContactMe';
// mui
import { Typography } from '@mui/material';
// icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const ContactMe = () => {
  return (
    <StyledContactMeContainer>
      <StyledImageWrapper />
      <StyledContactWrapper>
        <StyledContactDataWrapper>
          <MailOutlineIcon />
          <Typography variant="h3" component="h3">
            mmichno179@gmail.com
          </Typography>
        </StyledContactDataWrapper>
        <StyledContactDataWrapper>
          <PhoneAndroidIcon />
          <Typography variant="h3" component="h3">
            795 504 214
          </Typography>
        </StyledContactDataWrapper>
        <StyledContactDataWrapper>
          <LinkedInIcon />
          <Typography variant="h3" component="h3">
            Click
          </Typography>
        </StyledContactDataWrapper>
      </StyledContactWrapper>
    </StyledContactMeContainer>
  );
};
