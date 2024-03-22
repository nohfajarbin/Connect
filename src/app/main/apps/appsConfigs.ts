import { FuseRouteConfigsType } from '@fuse/utils/FuseUtils';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import ProfileAppConfig from './profile/profileAppConfig';

/**
 * The list of application configurations.
 */
const appsConfigs: FuseRouteConfigsType = [
	CalendarAppConfig,
	ChatAppConfig,
	ContactsAppConfig,
	ProfileAppConfig,
];

export default appsConfigs;
