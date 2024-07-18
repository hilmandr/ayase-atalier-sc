"use client";

import React, { useState } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins/image.min.js";

interface FroalaEditorProps {
  setValue: (value: string) => void;
  value?: string;
}

const ContentEditor = ({ value, setValue }: FroalaEditorProps) => {
  const [content, setContent] = useState("");
  //   const handleModelChange = (event: any) => {
  //     setContent(event);
  //   };

  return (
    <>
      <div>
        <FroalaEditor
          tag="textarea"
          model={value}
          onModelChange={setValue}
          config={{
            placeholderText: "Write your project here...",

            events: {
              "image.beforeUpload": function (files: any) {
                var editor = this;
                if (files.length) {
                  // Create a File Reader.
                  var reader = new FileReader();
                  // Set the reader to insert images when they are loaded.
                  reader.onload = function (e) {
                    // @ts-expect-error
                    var result = e.target.result;
                    // @ts-expect-error
                    editor.image.insert(result, null, null, editor.image.get());
                  };
                  // Read image as base64.
                  reader.readAsDataURL(files[0]);
                }
                // @ts-expect-error
                editor.popups.hideAll();
                // Stop default upload chain.
                return false;
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default ContentEditor;
