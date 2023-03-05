import api from 'config/api';

export const fetchSearch = (key: string | undefined) => (
  api.get(`/`)
);
