import styled from "styled-components";
import {Link as LinkRouter} from '@reach/router'

export const ConsultMenuPrint = styled.div`
position: absolute;
top: 0px;
right: 0px;
width: 400px;
height: calc(100% - 0px);
background: green;
display: flex;
flex-direction: column; 
justify-content: center; 
align-items: center; 
`;


export const Link = styled(LinkRouter)`
position: absolute;
top: 0px;
right: 0px;
width: 50px;
height: 50px;
background: blue;
`;


export const Link2 = styled(LinkRouter)`
position: absolute;
top: 0px;
right: 20px;
width: 50px;
height: 50px;
background: red;
`;



