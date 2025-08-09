"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { signupUser } from "../actions/auth";

export default function SignupForm() {
  return (
    <Background>
      <Overlay>
        <FormContainer action={signupUser}>
          <Title>RED PRODUCT</Title>
          <Subtitle>Inscrivez-vous en tant qu'Admin</Subtitle>

          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" placeholder="Nom" required />

          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="Email" required />

          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" name="password" type="password" placeholder="Entrer votre mot de passe" required />

          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" name="terms" required />
            <span>Accepter les termes et la politique</span>
          </CheckboxContainer>

          <Button type="submit">S'inscrire</Button>

          <SignupText>
            Vous avez déjà un compte ?{" "}
            <Link href="/login" passHref>
              <YellowLink>Se connecter</YellowLink>
            </Link>
          </SignupText>
        </FormContainer>
      </Overlay>
    </Background>
  );
}

// ===== Styles =====

// Arrière-plan image
const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: url("/public/__before.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Overlay avec ta couleur principale
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(73, 76, 79, 0.9); /* #494C4F avec transparence */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  font-family: Roboto, Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #494C4F;
  font-family: Roboto, Arial, sans-serif;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: #494C4F;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 17px;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 17px;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 17px;
  font-family: Roboto, Arial, sans-serif;
`;

const CheckboxContainer = styled.label`
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
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  font-size: 17px;
`;

const YellowLink = styled.a`
  color: #FFD964;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
