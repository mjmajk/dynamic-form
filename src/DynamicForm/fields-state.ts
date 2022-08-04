import create from "zustand";

export enum Field {
  Number = "number",
  Text = "text",
  Date = "date",
  Checkbox = "checkbox",
  Color = "color",
  Range = "range",
}

export interface FieldRecord {
  name: string;
  type: Field;
  label: string;
}

interface State {
  fields: FieldRecord[];
  addField: (field: Field) => void;
}

export const useFieldStore = create<State>((set) => ({
  fields: [],
  addField: (field: Field) =>
    set((state) => {
      const index = state.fields.length + 1;

      const newField = {
        label: `Field ${field} ${index}`,
        name: `${field}-${index}`,
        type: field,
      };

      return {
        fields: [...state.fields, newField],
      };
    }),
}));
