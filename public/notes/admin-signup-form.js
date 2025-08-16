'use client';

import React, { use, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
  
// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
  padding: 20px;
`;

const ContentWrapper = styled.div`
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const LogoSection = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: white;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  color: #333;

  @media (max-width: 480px) {
    padding: 30px 25px;
  }
`;

const FormTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 30px;
  color: #333;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Form = styled.div`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  background: #fafafa;
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  &:focus {
    outline: none;
    border-color: #666;
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 25px 0;
  text-align: left;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #666;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #4a4a4a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  &:hover {
    background: #333;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const LoginLink = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  a {
    color: #ffd700;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
`;

// Main Component
export default function AdminSignupForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        motDePasse: '',
        acceptTerms: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nom.trim()) {
            newErrors.nom = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }

        if (!formData.motDePasse) {
            newErrors.motDePasse = 'Le mot de passe est requis';
        } else if (formData.motDePasse.length < 6) {
            newErrors.motDePasse = 'Le mot de passe doit contenir au moins 6 caractères';
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'Vous devez accepter les termes et conditions';
        }

        return newErrors;
    };

    const handleSubmit = async () => {
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            // Ici vous pouvez ajouter votre logique d'API
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.nom,
                    email: formData.email,
                    password: formData.motDePasse,
                    role: 'admin'
                }),
            });

            if (response.ok) {
                // Redirection vers la page de connexion ou dashboard
                router.push('/auth/login?message=inscription-reussie');
            } else {
                const errorData = await response.json();
                setErrors({ submit: errorData.message || 'Erreur lors de l\'inscription' });
            }
        } catch (error) {
            console.error('Erreur d\'inscription:', error);
            setErrors({ submit: 'Erreur de connexion. Veuillez réessayer.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoginClick = () => {
        router.push('/auth/login');
    };

    const isFormValid = formData.nom && formData.email && formData.motDePasse && formData.acceptTerms;

    return (
        <Container>
            <ContentWrapper>
                <LogoSection>
                    <Logo>RED PRODUCT</Logo>
                </LogoSection>

                <FormContainer>
                    <FormTitle>Inscrivez-vous en tant que Admin</FormTitle>

                    <Form>
                        <FormGroup>
                            <FormInput
                                type="text"
                                name="nom"
                                placeholder="Nom"
                                value={formData.nom}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                            {errors.nom && <ErrorMessage>{errors.nom}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <FormInput
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <FormInput
                                type="password"
                                name="motDePasse"
                                placeholder="Mot de passe"
                                value={formData.motDePasse}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                            {errors.motDePasse && <ErrorMessage>{errors.motDePasse}</ErrorMessage>}
                        </FormGroup>

                        <CheckboxGroup>
                            <Checkbox
                                type="checkbox"
                                id="terms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleInputChange}
                                disabled={isLoading}
                            />
                            <CheckboxLabel htmlFor="terms">
                                Accepter les termes et la politique
                            </CheckboxLabel>
                        </CheckboxGroup>
                        {errors.acceptTerms && <ErrorMessage>{errors.acceptTerms}</ErrorMessage>}

                        {errors.submit && <ErrorMessage style={{ textAlign: 'center', marginBottom: '10px' }}>{errors.submit}</ErrorMessage>}

                        <SubmitButton
                            type="button"
                            disabled={!isFormValid || isLoading}
                            onClick={handleSubmit}
                        >
                            {isLoading ? 'Inscription...' : 'S\'inscrire'}
                        </SubmitButton>
                    </Form>
                </FormContainer>

                <LoginLink>
                    Vous avez déjà un compte? <a onClick={handleLoginClick}>Se connecter</a>
                </LoginLink>
            </ContentWrapper>
        </Container>
    );
}

import SignupForm from '@/app/auth/signup/signup-form';