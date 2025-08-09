'use client';

import styled from 'styled-components';
import { loginUser } from '../actions/auth';
import Link from 'next/link';

export default function LoginForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await loginUser(email, password);

    if (result.success) {
      alert(result.message);
      // Redirection possible ici
      <Link href="/app\dashboard.js" passHref legacyBehavior>
      </Link>

    } else {
      alert(result.message);
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <p>Connectez-vous en tant que Admin</p>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput type="email" name="email" id="email" placeholder="Email" required />
        <StyledLabel htmlFor="password">Mot de passe</StyledLabel>
        <StyledInput type="password" name="password" id="password" placeholder="Mot de passe" required />
        <CheckboxContainer>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Gardez-moi connecté</label>
        </CheckboxContainer>
        <StyledButton type="submit">Se connecter</StyledButton>
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
  background:white;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: black;
  font-family: 'Roboto', Arial, sans-serif;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #494C4F;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #005bb5;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
`;

const StyledTexte = styled.p`
font - family: Roboto;
font - weight: 400;
font - style: Regular;
font - size: 17 px;
`;