import { useRouter } from 'next/router';

export const redirectTo = (destination) => {
  const router = useRouter();

  // Certifique-se de que o redirecionamento ocorra após o carregamento da página
  const handleRedirect = () => {
    router.push(destination);
  };

  return handleRedirect;
};