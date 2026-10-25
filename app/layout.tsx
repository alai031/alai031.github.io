import '@/app/ui/global.css';
import {
  inter,
  jetbrainsMono,
  spaceGrotesk,
  satisfy,
} from '@/app/ui/fonts';
import Navbar from '@/app/ui/dashboard/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${satisfy.variable}`}
    >
      <body className="font-sans">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
