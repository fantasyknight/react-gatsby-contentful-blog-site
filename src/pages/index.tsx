import React from 'react';
import { Link } from 'gatsby';

import Title from '../components/Title';

import '../assets/styles/index.scss';

export default function Home() {
  return (
    <main>
      <Title>Hello TypeScript!</Title>
      <p>Hello TypeScript!</p>

      <Link to="/blogs">/blogs</Link>
    </main>
  );
}
