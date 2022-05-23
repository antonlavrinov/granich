import styled from "styled-components";

export const ParticipationSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`;

export const ParticipationWrapper = styled.div`
  display: grid;
  grid-template-columns: 51% 47%;
  grid-column-gap: 2%;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 100%;
    grid-column-gap: 0;
    grid-row-gap: 5vw;
  }
  ${props => !props.policy && `
    display: flex;
    justify-content: center;
  `}
`;
