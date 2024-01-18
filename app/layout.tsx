import '@/app/ui/global.css';

import Navbar from '@/app/ui/dashboard/navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
