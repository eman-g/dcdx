#!/usr/bin/env node

import { gracefulExit } from 'exit-hook';

import { SupportedApplications } from '../../types/SupportedApplications';
import { ResetCommand } from './command';

ResetCommand(SupportedApplications.JIRA);

process.on('SIGINT', () => {
  console.log(`Received term signal, trying to stop gracefully 💪`);
  gracefulExit();
});