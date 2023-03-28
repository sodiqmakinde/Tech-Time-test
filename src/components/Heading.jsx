import styled from "styled-components";

const GlobalHeading = ({ edit_class, heading, paragraph }) => {
  return (
    <Heading className={`handleMb ${edit_class}`}>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </Heading>
  );
};

export default GlobalHeading;

let Heading = styled.section`
  margin-top: 80px;
  h3,
  p {
    text-transform: capitalize;
  }
  @media (max-width: 980px) {
    text-align: center !important;
    p {
      text-align: center !important;
    }
  }
`;
