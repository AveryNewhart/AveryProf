import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Link {
  name: string;
  href: string;
}

export default function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [links, setLinks] = useState<Link[]>([
    {
      name: 'Home',
      href: '/'
    },
    {
        name: 'About',
        href: '/about'
      },
    {
      name: 'Projects',
      href: '/project'
    },
    {
      name: 'Contact',
      href: '/contact'
    },
    {
      name: 'Resume',
      href: '/resume'
    }
  ]);

  return (
    <div >
      {links.map((link, index) => (
        <a
          key={index}
          onClick={() => {
            navigate(link.href);
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
