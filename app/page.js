"use client";
import Link from 'next/link';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <PageContainer>
      <BackgroundOverlay />
      <Content>
        <Title>Bienvenue sur notre site !</Title>
        <Subtitle>Ceci est la page d'accueil.</Subtitle>
        <Nav>
          <NavList>
            <NavItem>
              <Link href="/login" passHref legacyBehavior>
                <NavLink>Aller à la page de connexion</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/signup" passHref legacyBehavior>
                <NavLink>Aller à la page d'inscription</NavLink>
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Content>
    </PageContainer>
  );
}

// 🎨 STYLES

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #494C4F;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', Arial, sans-serif;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/5c78b862-f5a2-4cb0-95bb-1481754ce493.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  text-align: center;
  min-width: 320px;
  max-width: 90%;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 16px;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  color: #ddd;
  margin-bottom: 32px;
  font-size: 1rem;
`;

const Nav = styled.nav`
  margin-top: 24px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 16px;
`;

const NavLink = styled.a`
  color: #FFD964;
  font-weight: bold;
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #bfae4a;
  }
`;