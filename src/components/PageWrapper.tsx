'use client';

import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div id="page" className={isHome ? 'home' : ''}>
      {children}
    </div>
  );
}
