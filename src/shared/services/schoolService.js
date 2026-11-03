import { fetchJson } from '../api';

export function getSchoolProfile() {
  return fetchJson('/school-profile');
}
