import TextAlignCenter from '@carbon/icons-react/lib/TextAlignCenter';
import TextAlignLeft from '@carbon/icons-react/lib/TextAlignLeft';
import TextAlignRight from '@carbon/icons-react/lib/TextAlignRight';
import TextBold from '@carbon/icons-react/lib/TextBold';
import TextItalic from '@carbon/icons-react/lib/TextItalic';
import TextStrikethrough from '@carbon/icons-react/lib/TextStrikethrough';
import TextUnderline from '@carbon/icons-react/lib/TextUnderline';
import clsx from 'clsx';
import { ContentBlock, Editor, EditorState, RichUtils } from 'draft-js';
import React, { useEffect, useState } from 'react';

import 'draft-js/dist/Draft.css';
import s from './TextEditor.module.scss';

type Props = {
  label?: string;
  hint?: string;
  placeholderText?: string;
  hasMarginTop?: boolean;
};

const TextEditor = ({
  label,
  hint,
  placeholderText,
  hasMarginTop = true
}: Props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [hasInitialized, setInitialization] = useState(false);
  const [currentStyles, setCurrentStyles] = useState<string[]>([]);
  const [isFocused, setFocus] = useState(false);

  useEffect(() => {
    if (editorState) {
      setTimeout(() => {
        setInitialization(true);
      }, 2000);
    }
  }, [editorState]);

  const inlineEditorStyles = [
    {
      label: <TextUnderline />,
      style: 'UNDERLINE',
    },
    {
      label: <TextBold />,
      style: 'BOLD',
    },
    {
      label: <TextItalic />,
      style: 'ITALIC',
    },
    {
      label: <TextStrikethrough />,
      style: 'STRIKETHROUGH',
    },
  ];

  const blockEditorStyles = [
    {
      label: <TextAlignLeft />,
      style: 'LEFT',
    },
    {
      label: <TextAlignCenter />,
      style: 'CENTER',
    },
    {
      label: <TextAlignRight />,
      style: 'RIGHT',
    },
  ];

  function getBlockStyle(block: ContentBlock) {
    switch (block.getType()) {
      case 'LEFT':
        return s.alignLeft;
      case 'CENTER':
        return s.alignCenter;
      case 'RIGHT':
        return s.alignRight;
      default:
        return '';
    }
  }

  const StyleButton = (props: any) => {
    const onClickButton = (e: any) => {
      e.preventDefault();

      props.onToggle(props.style);
    };
    return (
      <span
        className={clsx(s.styleList, props.isActive && s.activeStyle)}
        onMouseDown={onClickButton}
      >
        {props.label}
      </span>
    );
  };

  const InlineStyleControls = (props: any) => {
    const inlineStyle = editorState.getCurrentInlineStyle();

    return (
      <div>
        {inlineEditorStyles.map((style, key) => (
          <StyleButton
            key={key}
            label={style.label}
            onToggle={props.onToggle}
            style={style.style}
            isActive={inlineStyle.has(style.style)}
          />
        ))}
      </div>
    );
  };

  const BlockStyleControls = (props: any) => {
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div>
        {blockEditorStyles.map((style, key) => (
          <StyleButton
            key={key}
            label={style.label}
            onToggle={props.onToggle}
            style={style.style}
            isActive={blockType == style.style}
          />
        ))}
      </div>
    );
  };

  const onInlineClick = (e: any) => {
    const nextState = RichUtils.toggleInlineStyle(editorState, e);
    setEditorState(nextState);
  };

  const onBlockClick = (e: any) => {
    const nextState = RichUtils.toggleBlockType(editorState, e);
    setEditorState(nextState);
  };

  return (
    <div className="w-full">
      {hasInitialized ? (
        <>
          {label && (
            <div className={s.labelContainer}>
              <h6 className={s.label}> {label} </h6>
              <h6 className={s.hint}> {hint} </h6>
            </div>
          )}
          {hasMarginTop && !label && (<div className='mt-16'></div>)}
          <div className={clsx(s.TextEditor, isFocused && s.focused)}>
            <div className={s.editor}>
              <Editor
                editorKey='editor'
                editorState={editorState}
                onChange={(editorState) => setEditorState(editorState)}
                placeholder={placeholderText}
                blockStyleFn={getBlockStyle}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            </div>
            <div className={s.toolbar}>
              <InlineStyleControls onToggle={onInlineClick} />
              <BlockStyleControls onToggle={onBlockClick} />
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-center mt-2'>
          <div className={s.loader}></div>
        </div>
        )}
    </div>
  );
};

export default TextEditor;
