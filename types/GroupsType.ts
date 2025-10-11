import { Card } from "./GameCard";

export type GroupItem = {
  id: number;
  title: string;
  nextMatchDate: string;
  duration: string;
  participants: number;
  imageUrl: string;
};

export type GroupStore = {
  myGroups: Card[];
  otherGroups: Card[];
  groupSelected: Card[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  fetchMyGroups: () => void;
  fetchOtherGroups: () => void;
  getGroupById: (id: string) => any;
};
