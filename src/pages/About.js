import React from 'react';
import ContainerTitle from '../components/ui/ContainerTitle';
import { withTitle } from '../Context';
import Badge from '../components/ui/Badge';
import ButtonSubmit from '../components/ui/ButtonSubmit';

const About = () => (
    <ContainerTitle title="About me">
        <p className="lead text-justify">
            Je m'appelle <Badge>Jean-Charles Moussé</Badge>, j'ai <Badge>20 ans</Badge>, et je suis un grand passionné (un peu trop) d'informatique et plus particulièrement du <Badge>developpement</Badge>.
            J'ai suivi une formation de <Badge>DUT Informatique</Badge> à l'IUT de Laval (53), cela m'a permis directement après le BAC de pouvoir exercer et en <Badge>apprendre</Badge> d'avantages sur la programmation.
            Car bien avant le DUT, j'apprenais en <Badge>autodidacte</Badge> le développement, que ce soit des <Badge>sites internet</Badge> ou encore des applications <Badge>Android</Badge>.
        </p>
        <p className="lead text-justify">
            Je poursuis mes études avec une formation de <Badge>Concepteur Développeur</Badge> spécialité Mobile à Efreitech, une école situé à Villejuif (94), en <Badge>alternance</Badge> sur 2 ans.
            Cette formation m'attire particulièrement car elle offre une formation en alternance et propose des cours très centrés sur le développement <Badge>mobile</Badge> et <Badge>web</Badge>.
        </p>
        <p className="lead text-justify">
            J'adore apprendre de nouvelles <Badge>technologies</Badge>, afin de rester en <Badge>veille permanente</Badge>, ce qui est très important dans le monde de l'informatique, car tout <Badge>évolue</Badge> très rapidement !
        </p>

        <ButtonSubmit isLink="true" href="/images/CV Jean-Charles Moussé.pdf" target="_blank">
            Voir mon CV
        </ButtonSubmit>
    </ContainerTitle>
);

export default withTitle(About, "About");