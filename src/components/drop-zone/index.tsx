import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoCameraSharp } from "react-icons/io5";

type IProps = {
  onDrop: (files: File[]) => void;
};
export const DropFiles = (props: IProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      props.onDrop(acceptedFiles);
    },
    [props]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: "",
      })}
      className="w-32 h-32 rounded-lg flex items-center justify-center border border-solid border-[var(--grey)]"
    >
      <input {...getInputProps()} />

      <IoCameraSharp className="w-5 h-5 text-white" />
    </div>
  );
};
