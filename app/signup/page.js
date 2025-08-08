// app/signup/page.js

'use client';
import SignupForm from '../ui/signup-form';
import styled from 'styled-components';

export default function SignupPage() {
  return (
    <PageContainer>
      <Header>
        <LogoRed src="public/logo.svg" alt="Logo" />
        <Title>RED PRODUCT</Title>
      </Header>
      <SignupForm />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background: #494C4F;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const LogoRed = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 12px;
`;

const Titre = styled.h1`
  color: #FFD964;
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  font-size: 2rem;
`;

const Title = styled.h1`
  color: #FFD964;
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  font-size: 2rem;
`;