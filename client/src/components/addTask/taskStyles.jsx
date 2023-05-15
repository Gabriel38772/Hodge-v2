import styled from "@emotion/styled/macro";

export const AddTaskPane = styled.section`
  border-radius: 8px;
  color: ${(props) => [props.theme.colors.textPrimary]};
  margin: 1em;
  max-width: 720px;
  display: flex;
  align-items: center;
  min-height: 80vh;
  position: fixed;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  font-size: 0.9rem;
  animation-duration: 0.25s;
  animation-name: slidein1;

  @keyframes slidein1 {
    from {
      top: 80px;
    }

    to {
      top: 20px;
    }
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    margin: 1em auto;
    max-width: 500px;
  }
`;
