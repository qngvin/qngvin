import withNextIntl from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withIntl = withNextIntl('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withIntl(nextConfig);
