// "use client";
// import Document from "@tiptap/extension-document";
// import Dropcursor from "@tiptap/extension-dropcursor";
// import Image from "@tiptap/extension-image";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";
// import { EditorContent, useEditor } from "@tiptap/react";
// import React from "react";

// const Tiptap = () => {
//   const editor = useEditor({
//     extensions: [Document, Paragraph, Text, Image, Dropcursor],
//     content: `

//     `,
//   });
//   const addImage = () => {
//     const url = window.prompt("URL");

//     if (url) {
//       editor.chain().focus().setImage({ src: url }).run();
//     }
//   };

//   return (
//     <>
//       <div>
//         <button
//           onClick={addImage}
//           className=" border-stone-900 border rounded-lg px-4 py-3"
//         >
//           Add Image From URL
//         </button>
//         <EditorContent editor={editor} />
//       </div>
//     </>
//   );
// };

// export default Tiptap;
