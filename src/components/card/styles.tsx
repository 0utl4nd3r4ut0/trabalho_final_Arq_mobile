import { StyleSheet } from 'react-native';
import styled from "styled-components/native";
import * as Animatable from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    paddingLeft: 22,
    marginBottom: 8,
    borderRadius: 4
  },
  content: {
    flex: 1,
    padding: 22,
  },
  nome: {
    fontSize: 15,
    lineHeight: 18,
    color: '#3D434D',
    fontWeight: 'bold',
  },
  email: {
    color: '#888D97',
    fontSize: 13,
  },
  user: {
    color: '#888D97',
    fontSize: 13,
  },
  password: {
    color: '#1967FB',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    height: 80,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E3E3E3',
  }
});

export const Container = styled(Animatable.View)`
  align-items: center;

  width: 180px;
  height: 250px;
  background-color: ${({ theme }: any) => theme.COLORS.PRIMERY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT};
  font-family: ${({ theme }: any) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;

  margin-top: ${RFPercentage(5)}px;
`;

export const Foundation = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT};
  font-family: ${({ theme }: any) => theme.FONTS.REGULAR};
  font-size: 14px;

  margin-top: 16px;
`;