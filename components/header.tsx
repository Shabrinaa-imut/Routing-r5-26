import Link from 'next/link';

const Header = () => {
 return (
   <header className="bg-brown text-soft-brown py-4 sticky top-0 px-10 ">
     <nav className="container mx-auto flex justify-between items-center">
       <Link href="/" className="text-2xl font-bold">
          MINGYU
       </Link>
       <ul className="flex space-x-4">
         <li>
           <Link href="/" className="hover:text-white">
             Home
           </Link>
         </li>
         <li>
           <Link href="/portofolio" className="hover:text-white">
             Portfolio
           </Link>
         </li>
         <li>
           <Link href="/blog" className="hover:text-white">
             Blog
           </Link>
         </li>
         <li>
           <Link href="/event" className="hover:text-white">
             Event
           </Link>
         </li>
       </ul>
     </nav>
   </header>
 );
};


export default Header;

