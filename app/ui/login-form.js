// "use client";
// import { useState } from "react";
// import { loginUser } from "../actions/auth";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await loginUser(email, password);
//     if (success) {
//       alert("Connexion réussie !");
//     } else {
//       alert("Identifiants incorrects");
//     }
//   };

//    return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="E-mail"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Mot de passe"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//        />
       
//        <div>
//          <p> Gardez-moi connecté</p>
//        </div>
//       <button type="submit">Se connecter</button>
//      </form>
     
//   );
// }

// app/ui/login-form.js

'use client';

// ... imports et Styled Components ...
import { loginUser } from '../actions/auth'; // 👈 Importe ta fonction

export default function LoginForm() {
  // Gère la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Appelle ta Server Action
    const result = await loginUser(email, password);

    // Gère le résultat de l'authentification
    if (result.success) {
      alert(result.message); // Affiche un message de succès
      // Ici, tu peux rediriger l'utilisateur vers une autre page (par exemple, le tableau de bord)
    } else {
      alert(result.message); // Affiche un message d'erreur
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="email" name="email" placeholder="Email" />
      <StyledInput type="password" name="password" placeholder="Mot de passe" />
      <StyledButton type="submit">Se connecter</StyledButton>
    </StyledForm>
  );
}