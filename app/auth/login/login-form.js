"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function LoginForm() {
  return (
    <Background>
      <Overlay>
        <Logo src="/logoRD.svg" alt="Logo RED" />
        <FormContainer >
          <Subtitle>Connectez-vous en tant qu'Admin</Subtitle>

          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="Email" required />

          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" name="password" type="password" placeholder="Entrer votre mot de passe" required />

          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" name="terms" />
            <span>Me Garder connecter</span>
          </CheckboxContainer>

          <Button type="submit">Se connecter</Button>
        </FormContainer>
       <Link href="/auth/signup" passHref legacyBehavior>
  <YellowLink><strong>S'inscrire</strong></YellowLink>
</Link>
        <SignupText>Vous n'avez pas un compte ?{" "}
          <Link href="/auth/signup" passHref>
            <YellowLink><strong>S'inscrire</strong></YellowLink>
          </Link>
        </SignupText>
      </Overlay>
    </Background>
  );
}

// ===== Styles =====

// Arrière-plan image
const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("public/__before.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Overlay avec  couleur principale
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:  rgba(61, 61, 61, 1); /* #494C4F avec transparence */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  top: 146px;
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const FormContainer = styled.form`
  width: 384px;
  height: 424.25px;
  top: 222px;
  left: 768px;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  font-family: Roboto, Arial, sans-serif;
`;


const Subtitle = styled.p`
  margin-bottom: 2rem;
  font-family: Roboto, Arial, sans-serif;
  font-size: 17px;
`;

const Label = styled.label`
  margin-bottom: 1.25rem;
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  // font-weight: 400;
  font-size: 17px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.5rem;
  font-size: 17px;
  font-family: Roboto, Arial, sans-serif;
  color: #000;
  margin-bottom: 1.5rem;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const Button = styled.button`
  background-color: #494C4F;
  color: #fff;
  padding: 0.75rem;
  font-size: 17px;
  font-family: Roboto, Arial, sans-serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const SignupText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color:white;
  font-family: Roboto, Arial, sans-serif;
  font-size: 17px;
`;

const YellowLink = styled.a`
  color: #FFD964;
  text-decoration:bold;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;


  &:hover {
    text-decoration: underline;
  }
`;
