import { Wrapper, Box } from "./styles";

export function Dialog(props) {
  const {title, onDialog } = props;

  return (
    <Wrapper>
      <Box>
        <h3>{title}</h3>
        <div>
          <button onClick={() => onDialog(true)}>Sim</button>
          <button onClick={() => onDialog(false)}>Não</button>
        </div>
      </Box>
    </Wrapper>
  )
}
