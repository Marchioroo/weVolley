import { Card } from "@/types/GameCard";
import { create } from "zustand";

type GroupStore = {
  // Dados
  myGroups: Card[];
  otherGroups: Card[];
  groupSelected: Card[];

  // Loadings independentes
  loadingGroups: boolean;
  loadingDetails: boolean;

  // Actions
  fetchMyGroups: () => Promise<void>;
  fetchOtherGroups: () => Promise<void>;
  getGroupById: (id: string) => Card | undefined;
  getGroupDataById: (id: string) => Promise<Card | undefined>;
  resetGroups: () => void;
};

export const useGroupStore = create<GroupStore>((set, get) => ({
  myGroups: [],
  otherGroups: [],
  groupSelected: [],

  loadingGroups: false,
  loadingDetails: false,

  fetchMyGroups: async () => {
    set({ loadingGroups: true });
    try {
      const mockMyGroups: Card[] = [
        {
          id: 1,
          title: "Torneio de Setembro",
          nextMatchDate: "20/09/2025",
          duration: "1h30min",
          participants: 18,
          imageUrl: "https://picsum.photos/800/320?random=1",
        },
        {
          id: 2,
          title: "Campeonato Primavera",
          nextMatchDate: "05/10/2025",
          duration: "2h",
          participants: 24,
          imageUrl: "https://picsum.photos/800/320?random=2",
        },
      ];

      await new Promise((res) => setTimeout(res, 800));
      set({ myGroups: mockMyGroups });
    } finally {
      set({ loadingGroups: false });
    }
  },

  fetchOtherGroups: async () => {
    set({ loadingGroups: true });
    try {
      const mockOtherGroups: Card[] = [
        {
          id: 3,
          title: "Liga dos Veteranos",
          nextMatchDate: "15/10/2025",
          duration: "2h15min",
          participants: 32,
          imageUrl: "https://picsum.photos/800/320?random=3",
        },
        {
          id: 4,
          title: "Copa Feminina",
          nextMatchDate: "01/11/2025",
          duration: "2h30min",
          participants: 16,
          imageUrl: "https://picsum.photos/800/320?random=4",
        },
      ];

      await new Promise((res) => setTimeout(res, 1000));
      set({ otherGroups: mockOtherGroups });
    } finally {
      set({ loadingGroups: false });
    }
  },

  getGroupById: (id: string) => {
    const { myGroups, otherGroups } = get();
    const all = [...myGroups, ...otherGroups];
    const found = all.find((g) => String(g.id) === id);
    set({ groupSelected: found ? [found] : [] });
    return found;
  },

  getGroupDataById: async (id: string) => {
    set({ loadingDetails: true });
    try {
      // Simula carregamento real
      await Promise.all([get().fetchMyGroups(), get().fetchOtherGroups()]);
      return get().getGroupById(id);
    } finally {
      set({ loadingDetails: false });
    }
  },

  resetGroups: () => set({ myGroups: [], otherGroups: [], groupSelected: [] }),
}));

export const useMyGroups = () => useGroupStore((s) => s.myGroups);
export const useOtherGroups = () => useGroupStore((s) => s.otherGroups);
export const useGroupSelected = () => useGroupStore((s) => s.groupSelected);

export const useLoadingGroups = () => useGroupStore((s) => s.loadingGroups);
export const useLoadingDetails = () => useGroupStore((s) => s.loadingDetails);

export const useFetchMyGroups = () => useGroupStore((s) => s.fetchMyGroups);
export const useFetchOtherGroups = () =>
  useGroupStore((s) => s.fetchOtherGroups);
export const useGetGroupDataById = () =>
  useGroupStore((s) => s.getGroupDataById);
