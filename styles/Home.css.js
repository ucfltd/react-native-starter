import styled from 'styled-components/native';
import { SIZES } from '../const';


const Title = styled.Text`
	${'' /* color: ${ props => props.theme.text }; */}
`;

const Container = styled.View`
	${'' /* background-color: ${ props => props.theme.background };
	height: ${ SIZES.height }; */}
`;

export { Title, Container };