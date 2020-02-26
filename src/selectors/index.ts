import _ from "lodash";
import { makeEntitiesSelector, makeEntitySelector } from './utils';
export { makeEntitiesSelector, makeEntitySelector }

export const authSelector = makeEntitiesSelector('auth');
export const userSelector = makeEntitiesSelector('user');
export const profileInfoSelector = makeEntitiesSelector('profile');
export const postsSelector = makeEntitiesSelector('posts');

export const isAuthenticatedSelector = makeEntitySelector(authSelector, auth => _.get(auth, 'isAuthenticated'));
export const isLoadingSelector = makeEntitySelector(authSelector, auth => _.get(auth, 'isLoading'));
export const profileSelector = makeEntitySelector(profileInfoSelector, info => _.get(info, ['profile']));
export const profileIsLoadingSelector = makeEntitySelector(profileInfoSelector, info => _.get(info, 'isLoading'));

export const experienceSelector = makeEntitySelector(profileSelector, profile => _.get(profile, 'experience', []))
export const educationSelector = makeEntitySelector(profileSelector, profile => _.get(profile, 'education', []))

export const profilesSelector = makeEntitySelector(profileInfoSelector, info => _.get(info, 'profiles',[]))
export const profileByIdSelector = makeEntitySelector(profilesSelector, profiles => _.find(profiles, {}))
export const reposSelector = makeEntitySelector(profileInfoSelector, info => _.get(info,'repos'))

