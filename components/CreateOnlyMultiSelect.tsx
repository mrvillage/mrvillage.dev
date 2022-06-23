import { MultiSelect, MultiSelectProps } from "@mantine/core";

type CreateOnlyMultiSelectProps = Omit<MultiSelectProps, "data">;

export function CreateOnlyMultiSelect(props: CreateOnlyMultiSelectProps) {
  return (
    <MultiSelect
      {...props}
      getCreateLabel={(query) => query}
      searchable
      creatable
      data={[]}
      clearable
    />
  );
}
