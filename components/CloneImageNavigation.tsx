'use client';

import { SideNavigation } from './SideNavigation';

export function CloneImageNavigation(props: { mobile?: boolean }) {
  return <SideNavigation {...props} mode="image-duplicator-only" />;
}
