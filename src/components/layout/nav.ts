// Single source of truth for navigation. The sidebar (lg+), the mobile bar
// (<lg), and the footer all read from here so they can't drift apart.

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

/** In-page anchors on the home page. */
export const sections: NavItem[] = [
  { href: '/#the-shift', label: 'The Shift' },
  { href: '/#capabilities', label: 'What We Do' },
  { href: '/#why-studio', label: 'Why a Studio' },
  { href: '/#contact', label: 'Contact' },
];

/** Standalone pages. */
export const pages: NavItem[] = [
  { href: '/work/', label: 'Work' },
  { href: '/thesis/', label: 'Thesis' },
  { href: '/writing/', label: 'Writing' },
];

export const social: NavItem = {
  href: 'https://bsky.app/profile/birdcandy.com',
  label: '@birdcandy.com',
  external: true,
};

/** Prefix match so a post at /writing/<slug>/ still lights up "Writing". */
export const isActive = (currentPath: string, href: string): boolean =>
  currentPath === href ||
  currentPath === href.replace(/\/$/, '') ||
  currentPath.startsWith(href);
