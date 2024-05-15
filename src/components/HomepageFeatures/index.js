import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Monkey',
    Svg: require('@site/static/img/monkey.svg').default,
    description: (  
      <>
        I love monkeys
      </>
    ),
  },
  {
    title: 'Focus on Monkeys',
    Svg: require('@site/static/img/monkey2.svg').default,
    description: (
      <>
        Monkey
      </>
    ),
  },
  {
    title: 'Powered by Monkey',
    Svg: require('@site/static/img/monkey3.svg').default,
    description: (
      <>
        Funny Monkey
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
