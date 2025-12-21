'use client';
import { createContext, useContext } from 'react';

type ScrollContextType = {
  scrollToContact: () => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error('useScroll must be used within ScrollProvider');
  }
  return ctx;
};

export const ScrollProvider = ScrollContext.Provider;
