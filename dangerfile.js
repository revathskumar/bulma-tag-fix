import { schedule  } from 'danger';
import npmOutdated from 'danger-plugin-npm-outdated';
import npmAudit from 'danger-plugin-npm-audit';

schedule(npmOutdated());
schedule(npmAudit());

