'use client';
import SignupForm from '@/app/auth/signup/signup-form';
import styled from 'styled-components';

export default function SignupPage() {
  return (
    <PageContainer>
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

