'use client';

import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from '@/providers/StateProvider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
