import * as Animatable from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.PRIMARY_800};
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 250px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: "#C41F1F";
`;

export const Image = styled(Animatable.Image)`
margin-top: -50px;
width: 150px;
height: 150px;
`;

export const Containerw = styled(Animatable.View)`
  align-items: center;

  width: 180px;
  height: 250px;
  background-color: ${({ theme }: any) => theme.COLORS.PRIMERY_900};
  margin: 0 10px;
  border-radius: 10px;
`;