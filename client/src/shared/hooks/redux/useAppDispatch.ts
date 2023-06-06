'use client';

import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/providers/StateProvider';

export const useAppDispatch: () => AppDispatch = useDispatch;
