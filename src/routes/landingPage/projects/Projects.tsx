// styled
import {
  StyledProjectsContainer,
  StyledMasonryWrapper,
  StyledItem,
} from './StyledProjects';
// utils
import { projects } from './projects.utlis';

export const Projects = () => {
  return (
    <StyledProjectsContainer>
      <StyledMasonryWrapper columns={3} spacing={2}>
        {projects.map((val, index) => {
          return (
            <>
              <StyledItem elevation={1} key={index}>
                <img
                  alt={val.name}
                  src={val.background}
                  onClick={() => window.open(`${val.githubLink}`, '_blank')}
                />
              </StyledItem>
            </>
          );
        })}
      </StyledMasonryWrapper>
    </StyledProjectsContainer>
  );
};
