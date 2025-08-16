// 📁 app/auth/signup/page.js
import AdminSignupForm from './admin-signup-form';

export default function SignupPage() {
    return <AdminSignupForm />;
}

// 📁 app/auth/signup/admin-signup-form.js
'use client';

import React, { useState } from 'react';
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

