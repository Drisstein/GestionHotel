
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { signupUser } from '../actions/auth';



export default function SignupForm() {
    
    return (
        <>
            <form action={signupUser} >
                <p>Inscrivez-vous en tant que Admin</p>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input id="name" name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" name="password" type="password" placeholder='Entrer votre mot de passse'/>
                </div>
                <div>
                    <p> Accepter les termes et la politique</p>
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>Vous avez déjà un compte ?</p>
            <Link href="/login">
                <p><strong>Se connecter</strong></p>
            </Link>
        </>
    );
    return (
    <StyledForm>
      <StyledInput type="text" placeholder="Nom d'utilisateur" />
      <StyledInput type="email" placeholder="Email" />
      <StyledInput type="password" placeholder="Mot de passe" />
      <StyledButton type="submit">S'inscrire</StyledButton>
    </StyledForm>
  );

}


const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Pour que le conteneur prenne toute la hauteur de la vue
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;