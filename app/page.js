// app/page.js

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur notre site !</h1>
      <p>Ceci est la page d'accueil.</p>

      {/* Ajoute ces liens pour naviguer vers les autres pages */}
      <nav>
        <ul>
          <li>
            <Link href="/login">
              <p>Aller à la page de connexion</p>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <p>Aller à la page d'inscription</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}