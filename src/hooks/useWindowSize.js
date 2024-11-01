import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Verifica se estamos no lado do cliente
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o evento de resize
    window.addEventListener('resize', handleResize);

    // Chama a função para definir o tamanho inicial
    handleResize();

    // Limpa o evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
