'use client';

import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from '@/providers';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
