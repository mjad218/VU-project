"use client";
import Select, { StylesConfig } from "react-select";
import { useId } from "react";
import { FormControl } from "../form-control";
import { Button } from "../button";

export type IOption = {
  value: string;
  label: string;
};

type IProps = {
  placeholder?: string;
  onChange: (option: unknown) => void;
  options: IOption[];
  value: IOption | IOption[];
  isMulti?: boolean;
  isDisabled?: boolean;
};

const ReactSelect = (props: IProps) => {
  const id = useId();
  return (
    <FormControl>
      <Select
        inputId={id}
        placeholder={props.placeholder}
        isMulti={props.isMulti ?? false}
        isDisabled={props.isDisabled ?? false}
        value={props.value ? props.value : ""}
        styles={customStyles}
        onChange={props.onChange}
        options={props.options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            text: "orangered",
            primary25: "var(--main-color-light)",
            primary: "var(--main-color)",
          },
        })}
      />
    </FormControl>
  );
};

export default ReactSelect;

const PADDING_BLOCK = 10;
const customStyles: StylesConfig = {
  container: (baseStyles) => ({
    ...baseStyles,
    paddingTop: "0 !important",
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    cursor: "pointer",
    overflow: "hidden",
    paddingInline: "1.5rem",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    alignItems: "center",
    display: "flex",
    gap: "5px",
    maxHeight: "100%",
    borderRadius: "10px",
    margin: "0",
    padding: "0 10px",
    overflow: "hidden",
    cursor: "pointer",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    alignItems: "center",
    borderColor: "var(--grey)",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
    borderStyle: "solid",
    cursor: "pointer",
    borderWidth: "0",
    border: "1px solid var(--grey)",
    display: "flex",
    justifyContent: "space-between",
    paddingInline: "15px 0",
    paddingBlock: `${PADDING_BLOCK}px`,
    height: "100%",
    minHeight: `calc( 60px - ${2 * PADDING_BLOCK}px)`,
    overflow: "hidden",
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "var(--rose)",
    paddingInline: "10px 0px",
    borderRadius: "5px",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    height: "auto",
    margin: "0 !important",
    paddingBottom: 0,
    cursor: "pointer",
    paddingTop: 0,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "10px",
    cursor: "pointer",
    border: ".5px solid var(--grey)",
    backgroundColor: "var(--white)",
    padding: 0,
    paddingTop: "0 !important",
    paddingBlock: "0 !important",
    overflow: "hidden",
    boxShadow: "none",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    cursor: "pointer",
    height: "100%",
    alignItems: "center",
  }),
  group: (baseStyles) => ({
    ...baseStyles,
    paddingTop: "0 !important",
    paddingBlock: "0 !important",
  }),
  menuPortal: (baseStyles) => ({
    ...baseStyles,
    paddingTop: "0 !important",
    paddingBlock: "0 !important",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    paddingTop: "0 !important",
    paddingBlock: "0 !important",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    alignItems: "center",
    padding: "0 ",
    paddingInlineEnd: "10px",
  }),

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: "0 10px",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    padding: "0 ",
    marginBottom: 0,
    marginTop: 0,
  }),
};
