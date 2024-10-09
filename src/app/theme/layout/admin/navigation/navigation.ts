export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Inicio',
    type: 'item',
    url: '/analytics',
    icon: 'feather icon-home'
  },
  {
    id: 'forms',
    title: 'Domicilios',
    type: 'item',
    url: '/domicilios',
    classes: 'nav-item',
    icon: 'feather icon-file-text'
  },
  {
    id: 'forms',
    title: 'Domiciliarios',
    type: 'item',
    url: '/domiciliarios',
    classes: 'nav-item',
    icon: 'feather icon-file-text'
  },
  {
    id: 'forms',
    title: 'Usuarios',
    type: 'item',
    url: '/pagina-usuario',
    classes: 'nav-item',
    icon: 'feather icon-file-text'
  }
  ,
  {
    id: 'forms',
    title: 'Usuarios',
    type: 'item',
    url: '/pagina-usuario',
    classes: 'nav-item',
    icon: 'feather icon-file-text'
  },
  {
    id: 'forms',
    title: 'Domys',
    type: 'item',
    url: '/pagina-domy',
    classes: 'nav-item',
    icon: 'feather icon-file-text'
  }
];
