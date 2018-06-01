// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { defineMessages } from 'react-intl';
import CenteredLayout from '../components/layout/CenteredLayout';
import Loading from '../components/loading/Loading';
import adaLogo from '../assets/images/ada-logo.inline.svg';
import cardanoLogo from '../assets/images/cardano-logo.inline.svg';
import type { InjectedProps } from '../types/injectedPropsType';

export const messages = defineMessages({
  loadingWalletData: {
    id: 'loading.screen.loadingWalletData',
    defaultMessage: '!!!Loading wallet data',
    description: 'Message "Loading wallet data" on the loading screen.'
  },
});

@inject('stores', 'actions') @observer
export default class LoadingPage extends Component<InjectedProps> {

  render() {
    // const { stores } = this.props;
    const {
      isConnecting, isSyncing, syncPercentage, isLoadingWallets,
      hasBeenConnected, hasBlockSyncingStarted, localTimeDifference,
      ALLOWED_TIME_DIFFERENCE,
    } = {
      isConnecting: false,
      isSyncing: false,
      syncPercentage: 100,
      isLoadingWallets: false,
      hasBeenConnected: true,
      hasBlockSyncingStarted: true,
      localTimeDifference: 0,
      ALLOWED_TIME_DIFFERENCE: 0,
    }; // stores.networkStatus;
    const { hasLoadedCurrentLocale, hasLoadedCurrentTheme, currentLocale } = {
      hasLoadedCurrentLocale: true,
      hasLoadedCurrentTheme: true,
      currentLocale: 'en-US',
    }; // stores.profile;
    return (
      <CenteredLayout>
        <Loading
          currencyIcon={adaLogo}
          apiIcon={cardanoLogo}
          isSyncing={isSyncing}
          localTimeDifference={localTimeDifference}
          allowedTimeDifference={ALLOWED_TIME_DIFFERENCE}
          isConnecting={isConnecting}
          syncPercentage={syncPercentage}
          isLoadingDataForNextScreen={isLoadingWallets}
          loadingDataForNextScreenMessage={messages.loadingWalletData}
          hasBeenConnected={hasBeenConnected}
          hasBlockSyncingStarted={hasBlockSyncingStarted}
          hasLoadedCurrentLocale={hasLoadedCurrentLocale}
          hasLoadedCurrentTheme={hasLoadedCurrentTheme}
          currentLocale={currentLocale}
          handleReportIssue={this.handleReportIssue}
          onProblemSolutionClick={this.handleProblemSolutionClick}
        />
      </CenteredLayout>
    );
  }

  handleReportIssue = () => {}

  handleProblemSolutionClick = (/* link: string*/) => {
  }
}
