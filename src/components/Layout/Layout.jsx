import clsx from 'clsx'
import { useEffect } from "react";
import { useRouter } from "next/router";

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
    </div>
  )
}

export default Layout
