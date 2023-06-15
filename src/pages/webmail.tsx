import { useEffect } from 'react';

const MyComponent: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://webmail.totaltechclimatizacao.com.br/';
  }, []);

  return <div>{/* Conteúdo do seu componente */}</div>;
};

export default MyComponent;
