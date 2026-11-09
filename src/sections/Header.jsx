import { useEffect, useState } from 'react';
import sections from '../config/sections';
import useScrollSpy from '../hooks/useScrollSpy';
import Logo from '../components/ui/Logo';
import { IconClose, IconMenu } from '../components/ui/Icons';
import { InstagramButton, WhatsAppButton } from '../components/ui/Buttons';

const ids = sections.map((s) => s.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquea el scroll del fondo y cierra con Esc cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header__bar container">
        <a href="#inicio" className="header__logo" aria-label="MICC, ir al inicio" onClick={close}>
          <Logo size="sm" />
        </a>

        <nav className="header__nav" aria-label="Principal">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__cta">
          <WhatsAppButton label="Reservar turno" size="sm" />
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div id="menu-movil" className="mobile-menu" hidden={!open}>
        <nav aria-label="Menú móvil">
          {sections.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              style={{ '--i': i }}
              onClick={close}
            >
              <span className="mobile-menu__num">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <WhatsAppButton label="Reservar turno" />
          <InstagramButton />
        </div>
      </div>
    </header>
  );
}
