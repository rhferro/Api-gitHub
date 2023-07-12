import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors.white};
  padding: 1rem;
  margin-bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  margin-bottom: 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 60%;
  margin-bottom: 0.32rem;
  background: ${(props) => props.theme.colors.black};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
  margin-bottom: 0.8rem;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: normal;
  margin-bottom: 0.4rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 0rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  padding-bottom: 0;
  margin-bottom: 0;

  svg {
    margin-right: 10px;
  }
`;
