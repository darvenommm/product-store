import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/providers';

export const useAppDispatch: () => AppDispatch = useDispatch;
