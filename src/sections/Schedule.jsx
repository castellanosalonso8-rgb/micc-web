import siteConfig from '../config/siteConfig';
import { isPending, valueOr } from '../utils/links';
import { IconClock } from '../components/ui/Icons';
import { WhatsAppButton } from '../components/ui/Buttons';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import DevNote from '../components/ui/DevNote';
import { ArcsCorner } from '../components/ui/Decor';

const DAY_ORDER = ['lunes', 'martes', 'miércoles', 'miercoles', 'jueves', 'viernes', 'sábado', 'sabado', 'domingo'];
const dayRank = (day = '') => {
  const i = DAY_ORDER.indexOf(String(day).trim().toLowerCase());
  return i === -1 ? 99 : i;
};

/** Agrupa los horarios por día respetando el orden de la semana. */
function groupByDay(rows) {
  const sorted = [...rows].sort(
    (a, b) => dayRank(a.day) - dayRank(b.day) || String(a.time).localeCompare(String(b.time))
  );
  const groups = [];
  sorted.forEach((row) => {
    const last = groups[groups.length - 1];
    if (last && last.day === row.day) last.rows.push(row);
    else groups.push({ day: row.day, rows: [row] });
  });
  return groups;
}

const HEADERS = ['Día', 'Horario', 'Actividad', 'Profe'];

export default function Schedule() {
  const rows = siteConfig.schedule.filter((r) => r && !isPending(r.day));
  const groups = groupByDay(rows);
  const empty = groups.length === 0;

  return (
    <section id="horarios" className="section schedule" aria-labelledby="horarios-title">
      <div className="section__bg" aria-hidden="true">
        <ArcsCorner position="tl" />
      </div>
      <div className="container">
        <SectionHead
          id="horarios-title"
          eyebrow="Cuándo entrenamos"
          title="Horarios"
          lead={empty ? 'Estamos preparando la grilla de horarios.' : 'Elegí el día y la actividad que más te convenga.'}
        />

        <Reveal className={`schedule__board ${empty ? 'is-empty' : ''}`}>
          <div className="schedule__head" aria-hidden="true">
            {HEADERS.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>

          {empty ? (
            <>
              {[0, 1, 2].map((n) => (
                <div className="schedule__row schedule__row--ghost" key={n} aria-hidden="true">
                  <span className="schedule__day">—</span>
                  <span className="schedule__time">—</span>
                  <span className="schedule__activity">—</span>
                  <span className="schedule__teacher">—</span>
                </div>
              ))}
              <div className="schedule__soon">
                <IconClock />
                <p>
                  Los horarios se publican muy pronto. Mientras tanto, consultalos por WhatsApp.
                  <DevNote>schedule (siteConfig.js)</DevNote>
                </p>
                <WhatsAppButton label="Consultar horarios" variant="ghost" size="sm" message="¡Hola! Quería consultar los horarios de las actividades en MICC" />
              </div>
            </>
          ) : (
            groups.map((group) => (
              <div className="schedule__group" key={group.day}>
                {group.rows.map((row, i) => (
                  <div className="schedule__row" key={`${row.day}-${row.time}-${row.activity}-${i}`}>
                    <span className="schedule__day" data-label="Día">
                      {i === 0 ? group.day : ''}
                    </span>
                    <span className="schedule__time" data-label="Horario">
                      {valueOr(row.time, '—')}
                    </span>
                    <span className="schedule__activity" data-label="Actividad">
                      {valueOr(row.activity, '—')}
                    </span>
                    <span className="schedule__teacher" data-label="Profe">
                      {valueOr(row.teacher, '—')}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}
        </Reveal>
      </div>
    </section>
  );
}
