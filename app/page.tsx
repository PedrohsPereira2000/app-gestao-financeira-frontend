import Image from 'next/image'
import { useState } from 'react';
import Header from './components/header'
import HeaderLoged from './components/headerLoged'

const Home = () => {
  const [loged, setLoged] = useState('');
// TODO: Preciso aplicar a verificação para trocar entre headerloged e header normal
  return (
    <div>
      <Header/>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;