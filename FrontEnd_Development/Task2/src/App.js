import React from 'react';
import './App.css'
import Titulo from './components/Titulo';
import SubTitulo from './components/SubTitulo';
import CardTop from './components/CardTop';
import CardBottom from './components/CardBotton';
import Face from './img/icon-facebook.svg';
import Twitter from './img/icon-twitter.svg';
import Instagram from './img/icon-instagram.svg';
import Youtube from './img/icon-youtube.svg';
import ThemeProvider from './components/Darkmode';

function App() {

  const dadosCardTop = [
    {
      numero: '2000',
      social: '@aryanbansal',
      followers: 'Followers',
      imagem: Face,
      upSubscribers: '117 Today',
      color: '#028AE3',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '1000',
      social: '@aryanb45',
      followers: 'Followers',
      imagem: Twitter,
      upSubscribers: '113 Today',
      color: '#03A3ED',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '10k',
      social: '@__aryanb__',
      followers: 'Followers',
      imagem: Instagram,
      upSubscribers: '3000 Today',
      color: '#e24b91',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '8239',
      social: 'Aryan',
      followers: 'Subscribers',
      imagem: Youtube,
      upSubscribers: '555 Today',
      color: '#D90427',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]

  const dadosCardBottom = [
    {
      nome: 'Page Views',
      followers: '89',
      imagem: Face,
      upSubscribers: '3%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '78',
      imagem: Face,
      upSubscribers: '2%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Likes',
      followers: '8899',
      imagem: Instagram,
      upSubscribers: '2222%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Profile Views',
      followers: '52k',
      imagem: Instagram,
      upSubscribers: '1375%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Retweets',
      followers: '100',
      imagem: Twitter,
      upSubscribers: '303%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '899',
      imagem: Twitter,
      upSubscribers: '553%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '988',
      imagem: Youtube,
      upSubscribers: '17%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Total Views',
      followers: '1500',
      imagem: Youtube,
      upSubscribers: '12%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]

  return (
    <div className='App'>
      <ThemeProvider>
        <Titulo />

        {dadosCardTop.map(cardTop => <CardTop
          key={cardTop.imagem}
          numero={cardTop.numero}
          social={cardTop.social}
          followers={cardTop.followers}
          imagem={cardTop.imagem}
          upSubscribers={cardTop.upSubscribers}
          color={cardTop.color}
          colorUpDonw={cardTop.colorUpDonw}
          donwup={cardTop.donwup}
        />)}

        <SubTitulo />

        {dadosCardBottom.map(cardBottom => <CardBottom
          key={cardBottom.followers}
          nome={cardBottom.nome}
          followers={cardBottom.followers}
          imagem={cardBottom.imagem}
          upSubscribers={cardBottom.upSubscribers}
          colorUpDonw={cardBottom.colorUpDonw}
          donwup={cardBottom.donwup}
        />)}

      </ThemeProvider>
    </div>
  );
}

export default App;
