// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import LoadingSpinner from '../widgets/LoadingSpinner';
import styles from './AnnotatedLoader.scss';

type Props = {
  title: string,
  details: string
};

@observer
export default class AnnotatedLoader extends Component<Props> {

  render() {
    const { title, details } = this.props;

    return (
      <div className={styles.component}>

        <div>
          <div className={styles.body}>

            <div className={styles.title}>
              {title}
            </div>

            <LoadingSpinner />

            <div className={styles.progressInfo}>
              {details}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
