// styled
import {
  StyledBlogLatestContainer,
  StyledBackground,
  StyledBackgroundTextWrapper,
  StyledBackgroundText,
  StyledCardsWrapper,
  StyledCardContentWrapper,
  StyledVerticalWrapper,
} from './StyledBlogLatest';
// mui
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
// icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const BlogLatest = () => {
  return (
    <StyledBlogLatestContainer>
      <StyledVerticalWrapper>
        <Typography variant="h1" component="h2">
          Latest Posts
        </Typography>
      </StyledVerticalWrapper>
      <StyledCardsWrapper>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
            alt="Paella dish"
          />
          <StyledCardContentWrapper>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <hr />
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Read more</Button>
              <IconButton aria-label="like">
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
          </StyledCardContentWrapper>
        </Card>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
            alt="Paella dish"
          />
          <StyledCardContentWrapper>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <hr />
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Read more</Button>
              <IconButton aria-label="like">
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
          </StyledCardContentWrapper>
        </Card>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
            alt="Paella dish"
          />
          <StyledCardContentWrapper>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <hr />
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Read more</Button>
              <IconButton aria-label="like">
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
          </StyledCardContentWrapper>
        </Card>
      </StyledCardsWrapper>
    </StyledBlogLatestContainer>
  );
};
