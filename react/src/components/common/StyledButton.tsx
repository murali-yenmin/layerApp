import styled from "styled-components";

const StyledButton = styled.button`
  /* Tailwind CSS classes can be applied directly here */
  @apply bg-primary text-white font-bold py-2 px-4 rounded;

  /* You can also add regular CSS here */
  &:hover {
    @apply bg-primary-dark;
  }
`;

export default StyledButton;
