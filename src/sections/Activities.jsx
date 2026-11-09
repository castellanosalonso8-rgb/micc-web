import siteConfig from '../config/siteConfig';
import images from '../config/images';
import { isPending } from '../utils/links';
import { activityIcons, IconDumbbell } from '../components/ui/Icons';
import { WhatsAppButton } from '../components/ui/Buttons';
import PhotoSlot from '../components/ui/PhotoSlot';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import DevNote from '../components/ui/DevNote';
import { ArcsCorner, Halftone } from '../components/ui/Decor';

export default function Activities() {
  const { activities } = siteConfig;

  return (
    <section id="actividades" className="section activities" aria-labelledby="actividades-title">
      <div className="section__bg" aria-hidden="true">
        <Halftone position="tr" />
        <ArcsCorner position="br" />
      </div>
      <div className="container">
        <SectionHead
          id="actividades-title"
          eyebrow="Nuestras propuestas"
          title="Actividades"
          lead="Musculación, cardio y clases grupales para que elijas cómo moverte."
        />

        <div className="activities__grid">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.id] || IconDumbbell;
            const pending = isPending(activity.description);
            return (
              <Reveal
                as="article"
                key={activity.id}
                delay={index * 70}
                className={`activity-card activity-card--${activity.id}`}
              >
                <PhotoSlot
                  compact
                  photo={images.activities[activity.id]}
                  alt={activity.name}
                  icon={Icon}
                  className="activity-card__photo"
                />
                <div className="activity-card__shade" aria-hidden="true" />
                <div className="activity-card__body">
                  <div className="activity-card__top">
                    <span className="activity-card__num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="activity-card__icon">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="activity-card__title">{activity.name}</h3>
                  <p className={`activity-card__text ${pending ? 'is-muted' : ''}`}>
                    {pending ? 'Muy pronto vas a encontrar más información acá.' : activity.description}
                    {pending && <DevNote>activities → {activity.id}</DevNote>}
                  </p>
                  <WhatsAppButton
                    label="Reservar"
                    variant="ghost"
                    size="sm"
                    message={`¡Hola! Quería consultar por ${activity.name} y reservar un turno en MICC`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
