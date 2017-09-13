import styled,{css} from 'styled-components';
import media from './media';


export const Div =styled.div`
${({marginBottom})=>marginBottom && css`
margin-bottom:${marginBottom};
`}
`;
export const Container = styled(Div)`

  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
  padding-bottom:10px;
  
`;