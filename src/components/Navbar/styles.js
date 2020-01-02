import styled from "styled-components";
import {Link as LinkRouter} from '@reach/router'


export const NavbarMenu = styled.div`
  position: absolute; 
  right: 400px;
  width: 100px;
  height: calc(100% - 100px); 
  background: #262626;
  display: flex;
  flex-direction: column;
`;

 

// export const ConsultButton = styled.button`
// background-color: blue;
// border: none;
// color: white;
// padding: 15px 20px;
// text-align: center;
// text-decoration: none;
// display: inline-block;
// font-size: 16px;
// margin: 4px 2px;
// cursor: pointer;
// `;

 

export const Link = styled(LinkRouter)`
background-color: #A3C9D9;
border: none;
color: white;
padding: 15px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
`