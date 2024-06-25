export type rawNote = {
  id?: string;
  title?: string | null;
  tags?: [{ label: string }] | null;
  description?: string | null;
};
export type dataFromSearch = {
  searchQuery: string | null;
  selectedOptionTag: boolean;
};
