import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <Link href="">
          <Button xl>Entre em contato</Button>
        </Link>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <span>
            A sua oportunidade de colocar sua{' '}
            <span className="text-abacate">ideia</span> no mundo
          </span>
        }
        description="Plantando ideias, colhendo resultados."
        button={
          <Link href="">
            <Button xl>Entre em contato</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
