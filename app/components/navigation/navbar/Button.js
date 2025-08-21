'use client';
import { useRouter } from 'next/navigation';
const RedirectButton = ({ href, component }) => {
  const router = useRouter();
  return (
    <button className='h-12 rounded-lg bg-white font-bold text-black px-5' onClick={() => router.push(href)}>
      Return to {component}
    </button>
  );
};
export default RedirectButton;
