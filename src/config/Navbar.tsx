export interface NavItem {
  label: string;
  herf: string;
}

export const navbarConfig = {
  logo: {
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      herf: '/',
    },
    {
      label: 'Projects',
      herf: '/projects',
    },
    {
      label: 'Resume',
      herf: '/resume',
    },
  ] as NavItem[],
};
