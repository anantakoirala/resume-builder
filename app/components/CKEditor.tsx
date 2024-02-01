import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded?: boolean;
  register?: any;
  value?: string;
  error?: string;
  name?: string;
}

export default function CKeditor({
  onChange,
  editorLoaded,
  value,
  register,
  error,
  name,
}: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    ClassicEditor: typeof ClassicEditor;
  }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  const handleBlur = (event: any, editor: any) => {
    const data = editor.getData();
    if (register && register.onBlur) {
      register.onBlur(data);
    }
  };

  return (
    <>
      {editorLoaded ? (
        <>
          <div data-ckeditor-name={name}>
            {/* <CKEditor
              editor={ClassicEditor}
              data={value}
              onBlur={handleBlur}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
                onChange(data);
              }}
              config={{
                toolbar: [
                  "bold",
                  "italic",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "blockQuote",
                  "insertTable",
                ],
              }}
            /> */}
            <CKEditor
              editor={ClassicEditor}
              data={value}
              config={{
                toolbar: ["bold", "italic", "bulletedList", "numberedList"],
              }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                //console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
              }}
              onBlur={(event, editor) => {
                //console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                //console.log("Focus.", editor);
              }}
            />
          </div>
          <p>{error}</p>
        </>
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
