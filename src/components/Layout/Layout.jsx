import clsx from 'clsx'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';

export const Layout = ({
  otherClasses, children
}) => {

  const router = useRouter();
  useEffect(() => {
    const userCredentials = localStorage.getItem('loggedin');
    if (!userCredentials && router.pathname !== '/login' && router.pathname !== '/register') {
      router.push('/login');
    }
  }, [router.pathname]);
  const layoutClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={layoutClasses} data-testid='layout'>
      {children}
      <ToastContainer/>
    </div>
  )
}

export default Layout
