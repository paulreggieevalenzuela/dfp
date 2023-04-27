import CheckmarkOutline from '@carbon/icons-react/lib/CheckmarkOutline';
import CloudUpload from '@carbon/icons-react/lib/CloudUpload';
import WarningAlt from '@carbon/icons-react/lib/WarningAlt';

import { Link } from 'carbon-components-react';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaSpinner } from 'react-icons/fa';
import { GrAlert as WarningAlert } from 'react-icons/gr';
import { IoDocumentTextOutline as DocumentIcon } from 'react-icons/io5';

import s from './Dropzone.module.scss';

type Props = {
  state?: 'error' | 'success' | 'uploading';
  multiple?: boolean;
  timeout?: number;
  demo?: boolean;
  existingAcceptedFiles?: React.ReactNode;
  existingRejectedFiles?: React.ReactNode;
};

export default function FileUpload({
  state,
  multiple = false,
  timeout = 0,
  existingAcceptedFiles,
  existingRejectedFiles,
}: Props) {
  const [validFiles, setValidFiles] = useState<React.ReactNode[]>([
    existingAcceptedFiles,
  ]);
  const [fileRejected, setFileRejected] = useState(false);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [fileAccepted, setFileAccepted] = useState(false);
  const [isUploading, setUploading] = useState(false);
  const [invalidFiles, setInvalidFiles] = useState<React.ReactNode[]>([
    existingRejectedFiles,
  ]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
      'application/pdf': [],
    },
    maxSize: 3000000,
    onDrop: () => {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
      }, timeout);
    },
    multiple: multiple,
    onDropAccepted: (acceptedFiles) => {
      if (!multiple) {
        setValidFiles([]);
        setInvalidFiles([]);
        setFileAccepted(true);
        setFileRejected(false);
        setRejectedCount(0);
      }
      acceptedFiles.map((file, key) =>
        setValidFiles((validFiles) => [
          ...validFiles,
          <li key={key + '_' + file.name + '_' + Math.random()}>
            <div className='mb-2 flex items-center gap-3 break-all rounded p-2 pr-24 outline outline-1 outline-gray-200'>
              <div>
                <DocumentIcon size={15} />
              </div>
              <div>
                <h4 className='text-[16px]'>{file.name}</h4>
              </div>
              <div className='whitespace-nowrap font-light text-gray-600'>
                {Math.round(file.size / 1024)}KB
              </div>
            </div>
          </li>,
        ])
      );
    },
    onDropRejected: (fileRejections) => {
      if (!multiple) {
        setValidFiles([]);
        setInvalidFiles([]);
        setFileRejected(true);
        setFileAccepted(false);
        setRejectedCount(fileRejections.length);
      }
      fileRejections.map((file, key) =>
        setInvalidFiles((invalidFiles) => [
          ...invalidFiles,
          <li
            key={key + '_' + file.file.name + '_' + Math.random()}
            className='mb-2 flex items-center gap-3 break-all rounded p-2 pr-24 outline outline-1 outline-red-300'
          >
            <div>
              <WarningAlert size={15} />
            </div>
            <div>
              <h4 className='text-[16px]'>{file.file.name}</h4>
            </div>
            <div className='whitespace-nowrap font-light text-gray-600'>
              {Math.round(file.file.size / 1024)}KB
            </div>
          </li>,
        ])
      );
    },
  });

  const generateBoxContent = () => {
    if (isUploading || state == 'uploading') {
      return (
        <div>
          <FaSpinner />
          Uploading file
        </div>
      );
    } else if (!multiple && rejectedCount > 1) {
      return (
        <div>
          <WarningAlt />
          Please Upload only 1 file
        </div>
      );
    } else if (fileRejected || state == 'error') {
      return (
        <div>
          <WarningAlt />
          Unable to upload file
        </div>
      );
    } else if (fileAccepted || state == 'success') {
      return (
        <div>
          <CheckmarkOutline />
          File upload complete!
        </div>
      );
    } else {
      return (
        <div>
          <CloudUpload />
          <span>
            {multiple ? 'Drag-and-drop files' : 'Drag and drop a file'}, or{' '}
            <Link>browse computer</Link>
          </span>
        </div>
      );
    }
  };

  return (
    <div className={s.Dropzone}>
      <div
        {...getRootProps({
          className: clsx(
            s.baseStyle,
            /* state is present only to demo static states, won't be used in actual implementation */
            state
              ? state == 'uploading'
                ? s.uploadStyle
                : state == 'error'
                  ? s.rejectStyle
                  : state == 'success'
                    ? s.successStyle
                    : s.baseStyle
              : /* end //for demo only */
              fileRejected && s.rejectStyle,
            fileAccepted && s.successStyle,
            isUploading && s.uploadStyle
          ),
        })}
      >
        <input {...getInputProps()} />
        <span>{generateBoxContent()}</span>
      </div>
      <div className='flex-col'>
        <ul>{validFiles}</ul>
        <ul>{invalidFiles}</ul>
      </div>
    </div>
  );
}
