import React, { useEffect, useRef, useState } from 'react';
import './assets/stylesheets/Nav.scss';
import { NavHashLink } from 'react-router-hash-link';

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false); // Starts closed
  const [scroll, setScroll] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 120);
      
      // Verify scroll position to change active link
      const sections = ['#sobre_mi', '#proyectos', '#habilidades'];
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(section);
          }
        }
      });

      // Close the menu when scrolling
      if (menuToggle) {
        setMenuToggle(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu--toggle')) {
        setMenuToggle(false); // Close menu if clicked outside
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuToggle]);

 
  const toggleMenu = () => {
    setMenuToggle(prev => !prev); // Toggle menu state
  };

  return (
    <>
      <nav className={`nav`}>
        <h1 className='nav__logo'>RevayDev</h1>
        <ul ref={menuRef} className={`nav__menu ${menuToggle ? 'active' : ''}`}>
          <li>
            <NavHashLink to="#" >Inicio</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#sobre_mi">Sobre mí</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#proyectos">Proyectos</NavHashLink>
          </li>
          <li>
            <NavHashLink to="#habilidades" >Habilidades</NavHashLink>
          </li>
        </ul>
        <span 
          className={`menu--toggle ${menuToggle ? 'mostrar_x' : ''}`} 
          onClick={toggleMenu}>
          <span className='barra1'></span>
          <span className='barra2'></span>
          <span className='barra3'></span>
        </span>
      </nav>
      <div className={`nav__menu--fondo ${scroll ? 'nav--scroll' : ''} ${menuToggle ? 'active-fondo' : ''}`}></div>
    </>
  );
}
