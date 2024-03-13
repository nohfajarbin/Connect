import i18next from 'i18next';
import { FuseNavigationType } from '@fuse/core/FuseNavigation/types/FuseNavigationType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { authRoles } from '../auth';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';
import NotificationsIcon from '@mui/icons-material/Notifications';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavigationType = [
	
	{
		id: 'dashboards.project',
		title: 'Dashboard',
		type: 'item',
		icon: 'heroicons-outline:clipboard-check',
		url: '/dashboards/project'
	},
	{
		id: 'dashboards.analytics',
		title: 'Analytics',
		type: 'item',
		icon: 'heroicons-outline:chart-pie',
		url: '/dashboards/analytics'
	},
	{
		id: 'dashboards.finance',
		title: 'Modules',
		type: 'item',
		icon: 'heroicons-outline:cash',
		url: '/dashboards/finance'
	},
	{
		id: 'dashboards.crypto',
		title: 'Schedule',
		type: 'item',
		icon: 'heroicons-outline:currency-dollar',
		url: '/dashboards/crypto'
	},
	{
		id: 'apps.calendar',
		title: 'Calendar',
		type: 'item',
		icon: 'heroicons-outline:calendar',
		url: '/apps/calendar'
	},
	{
		id: 'apps.chat',
		title: 'Messages',
		type: 'item',
		icon: 'heroicons-outline:chat-alt',
		url: '/apps/chat'
	},
	{
		id: 'apps.academy',
		title: 'Notification',
		type: 'item',
		icon: 'heroicons-outline:bell',
		url: '/'
	},
	{
		id: 'apps.contacts',
		title: 'settings',
		type: 'item',
		icon: 'heroicons-outline:cog',
		url: '/'
	}
];

export default navigationConfig;
