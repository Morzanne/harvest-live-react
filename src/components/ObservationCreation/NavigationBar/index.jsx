import React from 'react';

import styles from './styles.module.scss';

import Button from 'react-bootstrap/Button';

const NavigationBar = ({ previousStep, shouldSubmit }) => {
  return (
    <div className={styles.wrapper}>
      {previousStep && (
        <Button
          variant="light"
          onClick={previousStep}
          className={styles.previousButton}
          size="lg"
        >
          Précedent
        </Button>
      )}
      {shouldSubmit && (
        <Button
          size="lg"
          variant="success"
          type="submit"
          className={styles.nextButton}
        >
          Suivant
        </Button>
      )}
    </div>
  );
};

export default NavigationBar;
