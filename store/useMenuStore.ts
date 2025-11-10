// store/useMobileMenuStore.ts
import { create } from 'zustand';
import React from 'react';

// Define the type for the refs map
type SectionRefs = {
    [key: string]: React.RefObject<HTMLDivElement | null>;
};

interface MenuItemState {
    // Other state
    isMenuOpen: boolean;
    sectionName: string;
    toggleMenu: () => void;
    setIsMenuState: (isOpen: boolean) => void;

    // Actions that live alongside the store
    // This action will trigger the scroll.
    scrollToSection: (name: string) => void;
}

// ⭐️ A simple, non-reactive object to hold the refs outside of the main Zustand state
const refsContainer: { current: SectionRefs | null } = { current: null };

// ⭐️ NEW: Function to initialize the refsContainer from the Page component
export const initializeRefsStore = (refs: SectionRefs) => {
    refsContainer.current = refs;
};


export const useMobileMenuStore = create<MenuItemState>((set, get) => ({
    isMenuOpen: false,
    sectionName: "",
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    setIsMenuState: (isOpen: boolean) => set((state) => ({ sectionName: state.sectionName, isMenuOpen: isOpen})),

    scrollToSection: (name: string) => {
        const refs = refsContainer.current;
        if (!refs) {
            console.error("Refs not initialized in the store.");
            return;
        }

        const ref = refs[name];
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        set(((state) => ({sectionName: name, isMenuOpen: state.isMenuOpen})));
    }
}));

// Export a custom hook for easy access to the necessary actions in Header/Nav
// Keep a hook that returns the actions/state, but avoid returning a new object
// from a single selector to prevent useSyncExternalStore warnings.
export const useMenuActions = () => {
    const isMenuOpen = useMobileMenuStore((state) => state.isMenuOpen);
    const sectionName = useMobileMenuStore((state) => state.sectionName);
    const toggleMenu = useMobileMenuStore((state) => state.toggleMenu);
    const setIsMenuOpen = useMobileMenuStore((state) => state.setIsMenuState)
    const scrollToSection = useMobileMenuStore((state) => state.scrollToSection);

    return { isMenuOpen, sectionName, toggleMenu, scrollToSection, setIsMenuOpen };
};