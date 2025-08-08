import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { signupUser } from '../actions/auth';

export default function SignupForm() {
  return (
    <StyledContainer>
      <StyledForm action={signupUser}>
        <p>Inscrivez-vous en tant qu'Admin</p>
        <label htmlFor="name">Nom</label>
        <StyledInput id="name" name="name" placeholder="Nom" required />

        <label htmlFor="email">E-mail</label>
        <StyledInput id="email" name="email" type="email" placeholder="Email" required />

        <label htmlFor="password">Mot de passe</label>
        <StyledInput id="password" name="password" type="password" placeholder="Entrer votre mot de passe" required />

        <CheckboxContainer>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">Accepter les termes et la politique</label>
        </CheckboxContainer>

        <StyledButton type="submit">S'inscrire</StyledButton>
       <StyledAccountText>
          Vous avez déjà un compte ?{' '}
          <Link href="/login">
            <StyledAccountLink><strong>Se connecter</strong></StyledAccountLink>
          </Link>
        </StyledAccountText>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #494C4F;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', Arial, sans-serif;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  padding: 32px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: black;
  font-family: 'Roboto', Arial, sans-serif;
`;

const StyledAccountText = styled.p`
  color: #FFD964;
  font-family: 'Roboto', Arial, sans-serif;
`;

const StyledAccountLink = styled.a`
  color: #FFD964;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #494C4F;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;