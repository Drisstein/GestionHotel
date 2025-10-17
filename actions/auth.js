'use server';

import Link from "next/link";

export async function loginUser(email, password) {
  // Simulation
  if (email === 'admin@gmail.com' && password === '1234') {
    return { success: true, message: 'Connexion réussie' };
    
    
  } else {
    return { success: false, message: 'Email ou mot de passe incorrect' };
  }
}

export async function signupUser(name, email, password) {
  // Simulation
  if (email && password && name) {
    return { success: true, message: 'Inscription réussie' };
  } else {
    return { success: false, message: 'Veuillez remplir tous les champs' };
  }
}