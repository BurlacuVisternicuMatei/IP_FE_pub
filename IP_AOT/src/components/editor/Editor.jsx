import React, { useRef, useState, useEffect } from "react"
import StarterKit from '@tiptap/starter-kit'
import { useCurrentEditor, EditorProvider } from '@tiptap/react'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import Placeholder from '@tiptap/extension-placeholder'
// import {Doc} from 
import {OrderedList} from '@tiptap/extension-ordered-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faStrikethrough, faCode, faListOl, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faHeading, faQuoteLeft,faLaptopCode, faRemoveFormat} from '@fortawesome/free-solid-svg-icons'
import './Editor.css'



const MenuBar = () => {
    const { editor } = useCurrentEditor();
    const [selectedAlignment, setSelectedAlignment] = useState(faAlignLeft);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isSideNoteVisible, setSideNoteVisible] = useState(false);
    const showSideNote = (visible) => {
        setSideNoteVisible(visible);
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const handleAlignmentChange = (alignment) => { 
        setSelectedAlignment(alignment);
        setIsDropdownOpen(false);
    };
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    
    if(!editor) {
      return null;
    }


  
    return (
        <div className="menu-bar-wrapper">
            <div className="menu-bar">
                <div className="first-half-menu">
                    <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : "buttonWrapper"}
                    >
                    <FontAwesomeIcon icon={faBold}/>
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={!editor.can().chain().focus().toggleItalic().run()}
                        className={editor.isActive("italic") ? "is-active" : "buttonWrapper"}
                    >
                        <FontAwesomeIcon icon={faItalic}/>
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        disabled={!editor.can().chain().focus().toggleUnderline().run()}
                        className={editor.isActive("underline") ? "is-active" : "buttonWrapper"}
                    >
                        <FontAwesomeIcon icon={faUnderline}/>
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={!editor.can().chain().focus().toggleStrike().run()}
                        className={editor.isActive("strike") ? "is-active" : "buttonWrapper"}
                    >
                        <FontAwesomeIcon icon={faStrikethrough}/>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        disabled={!editor.can().chain().focus().toggleCode().run()}
                        className={editor.isActive('code') ? 'is-active' : 'buttonWrapper'}
                    >
                        <FontAwesomeIcon icon={faCode} />
                    </button>  
                </div>
                <div className="second-half-menu">
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active' : 'buttonWrapper'}
                    >
                        <FontAwesomeIcon icon={faListOl} />
                    </button>  
                    <div className="align-dropdown" ref={dropdownRef}>
                        <button onClick={toggleDropdown}
                        className={editor.isActive("align") ? "is-active" : "buttonWrapper"} >
                            <FontAwesomeIcon icon={selectedAlignment} />
                        </button>
                        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                            <button onClick={() => {editor.chain().focus().setTextAlign('left').run(); handleAlignmentChange(faAlignLeft);} }
                                    className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : 'buttonWrapper'}
                            >
                                <FontAwesomeIcon icon={faAlignLeft} />
                            </button>
                            <button onClick={() => {editor.chain().focus().setTextAlign('center').run(); handleAlignmentChange(faAlignCenter);} }
                                    className={editor.isActive({textAlign: 'center'}) ? "is-active" : "buttonWrapper"}
                            >
                                <FontAwesomeIcon icon={faAlignCenter} />
                            </button>
                            <button onClick={() => {editor.chain().focus().setTextAlign('right').run(); handleAlignmentChange(faAlignRight);} }
                                    className={editor.isActive({textAlign: 'right'}) ? "is-active" : "buttonWrapper"}
                            >
                                <FontAwesomeIcon icon={faAlignRight} />
                            </button>
                            <button onClick={() => {editor.chain().focus().setTextAlign('justify').run(); handleAlignmentChange(faAlignJustify);} }
                                    className={editor.isActive({textAlign: 'justify'}) ? "is-active" : "buttonWrapper"}
                            >
                                <FontAwesomeIcon icon={faAlignJustify} />
                            </button>
                        </div>
                    </div>
                    <button onClick={() => { editor.chain().focus().toggleHeading({level: 2}).run() } }
                                    className={editor.isActive("heading") ? "is-active" : "buttonWrapper"}
                            >
                                <FontAwesomeIcon icon={faHeading}/>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? "is-active" : "buttonWrapper"}
                    >
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </button>
                    <div className="codeBlockBtn-wrapper">
                        <button
                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                            className={editor.isActive('codeBlock') ? 'is-active' : 'buttonWrapper'}
                            onMouseOver={()=> showSideNote(true)}
                            onMouseOut={()=>showSideNote(false)}
                        >
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </button>
                        {isSideNoteVisible && (
                            <div className="sidenote">
                                Press Command/Ctrl+Enter to leave the fenced code block and continue typing in boring paragraphs.
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => editor.chain().focus().unsetAllMarks().run()}
                        className="buttonWrapper"
                    >
                        <FontAwesomeIcon icon={faRemoveFormat} />
                    </button>
                    
                </div>
            </div>  
      </div>
    );
  };
  
const extensions = [
    StarterKit.configure({
        codeBlock: false,
        orderedList: false,
        heading: false,
    }),
    Underline,
    // Italic,
    OrderedList.configure({
        HTMLAttributes: {
            class: 'ordered-list',
        },
    }),
    TextAlign.configure({
        defaultAlignment: 'left',
        alignments:['left','right','center','justify'],
        types: ['paragraph', 'heading']
    }),
    Heading.configure({
        HTMLAttributes:{
            class:'heading',
        },
        levels: [2],
    }),
    // Blockquote,
    CodeBlockLowlight.configure({
        lowlight: createLowlight(common)
    }),
    Placeholder.configure({
        placeholder: 'Write here your post..',
    }),
];
  
const TipTap = () => { 
    const [content, setContent] = useState("");
    
    return (
      <div className="text-editor">
        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={content}
          onUpdate={({ editor }) => {
            const html = editor.getHTML();
            setContent(html);
          }}
        >
        </EditorProvider>
      </div>
    );
  };
  
  export default TipTap;
  