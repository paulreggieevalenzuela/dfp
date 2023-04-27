import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';





export default function Logout() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!session) {
        router.push(`/login`, undefined, { shallow: true });
        return;
      } else {
        signOut();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [session, router])


  return (
    <div className='m-auto text-center my-[40vh]'>Logging out...</div>
  );
}