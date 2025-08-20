'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Vérifier si un user est déjà connecté
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") router.push("/hotels");
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/hotels");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <Background>
      <Container>
        <Logo src="/logoRD.svg" alt="Logo RED" />

        <FormContainer onSubmit={handleSubmit}>
          <Subtitle>Connectez-vous en tant qu'Admin</Subtitle>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <CheckboxContainer>
            <Checkbox type="checkbox" id="terms" />
            <span>Me garder connecté</span>
          </CheckboxContainer>

          <Button type="submit">Se connecter</Button>
        </FormContainer>

        <SignupText>
          Vous n'avez pas un compte ?{" "}
          <Link href="/auth/signup">
            <YellowLink><strong>S'inscrire</strong></YellowLink>
          </Link>
        </SignupText>
      </Container>
    </Background>
  );
}

// ===== Styles =====
const Background = styled.div`
  height: 100vh;
  width: 100vw;
  margin:0;
  padding:0;
  background-image: url("/__before.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Couleur de superposition en multiply */
  background-color: #494C4F;
  background-blend-mode: multiply;

  display: flex;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  width: 384px;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  font-family: Roboto, Arial, sans-serif;
`;

const Subtitle = styled.p`
  margin-bottom: 1rem;
  font-size: 17px;
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 15px;
  color: #000;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  margin: 1rem 0;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const Button = styled.button`
  background-color: #494C4F;
  color: #fff;
  padding: 0.75rem;
  font-size: 16px;
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
  color: white;
  font-size: 15px;
  font-family: Roboto, Arial, sans-serif;
`;

const YellowLink = styled.a`
  color: #FFD964;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 1rem;
  text-align: center;
`;
