
export const NavbarsMock = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Products',
    items: [
      {
        routeLink: 'products/level1_1',
        label: 'Level 1.1',
        items: [
          { routeLink: 'products/level2_1', label: 'Level 2.1' },
          {
            routeLink: 'products/level2_2',
            label: 'Level 2_2',
            items: [
              { routeLink: 'products/level3_1', label: 'Level 3.1' },
              { routeLink: 'products/level3_2', label: 'Level 3.2' },
            ],
          },
        ],
      },
      {
        routeLink: 'products/level1_2',
        label: 'Level 1.2',
      },
    ],
  },
  {
    routeLink: 'statistics',
    icon: 'fal fa-chart-bar',
    label: 'Statistics',
  },
  {
    routeLink: 'coupons',
    icon: 'fal fa-tags',
    label: 'Coupons',
    items: [
      {
        routeLink: 'coupons/list',
        label: 'List Coupons',
      },
      {
        routeLink: 'coupons/create',
        label: 'Create Coupons',
      },
    ],
  },
  {
    routeLink: 'pages',
    icon: 'fal fa-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'fal fa-camera',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    expanded: true,
    items: [
      { routeLink: 'settings/profile', label: 'Profile' },
      { routeLink: 'settings/customize', label: 'Customize' },
    ],
  },
];
