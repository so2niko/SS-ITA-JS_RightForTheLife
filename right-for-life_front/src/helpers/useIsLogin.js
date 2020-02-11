import { useSelector } from 'react-redux';

export const useIsLogin = () => {
  const isLoginData = useSelector(store => store.isLogin);
  return Boolean(isLoginData);
}
