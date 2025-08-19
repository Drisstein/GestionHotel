import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'; // Ajout du hook

export default function SignupForm() {
  const router = useRouter();

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu ajoutes ta logique d'inscription (API, etc.)
    // Si l'inscription est réussie :
    router.push("/auth/login");
  };

  return (
    <Background>
      <Overlay>
        <FormWrapper>
          <Logo src="/logoRD.svg" alt="Logo RED" />
          <StyledForm onSubmit={handleSubmit}>
            <FormTitle>Inscrivez-vous en tant qu'Admin</FormTitle>
            <Label htmlFor="name">Nom</Label>
            <StyledInput id="name" name="name" placeholder="Nom" required />

            <Label htmlFor="email">E-mail</Label>
            <StyledInput id="email" name="email" type="email" placeholder="Email" required />

            <Label htmlFor="password">Mot de passe</Label>
            <StyledInput id="password" name="password" type="password" placeholder="Entrer votre mot de passe" required />

            <CheckboxContainer>
              <Checkbox type="checkbox" id="terms" name="terms" />
              <span>Accepter les termes et la politique </span>
            </CheckboxContainer>

            <StyledButton type="submit">S'inscrire</StyledButton>
          </StyledForm>
          <StyledAccountText>
            Vous avez déjà un compte ?{' '}
            <Link href="/auth/login" passHref >
              <StyledAccountLink><strong>Se connecter</strong></StyledAccountLink>
            </Link>
          </StyledAccountText>
        </FormWrapper>
      </Overlay>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("/public/__before.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(61, 61, 61, 1); /* #494C4F avec transparence */
  display: flex;
  justify-content: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  top: 146px;
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
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

const FormTitle = styled.p`
 margin-bottom: 2rem;
  font-family: Roboto, Arial, sans-serif;
  font-size: 17px;
`;

const StyledAccountText = styled.p`
  color: white;
  font-family: 'Roboto', Arial, sans-serif;
  text-align: center;
  margin-top: 24px;
`;

const StyledAccountLink = styled.a`
  color: #FFD964;
  text-decoration: underline;
  cursor: pointer;
  top:33px ;
`;

const StyledInput = styled.input`
  padding: 12px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 1.25rem;
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 17px;
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
    background-color: #FFD964;
    color: #494C4F;
  }
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