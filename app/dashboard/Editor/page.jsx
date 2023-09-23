import React from "react";
import Dashboardlayout from "@/components/Dashboardlayout/page";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
// import { EditorData } from "../../../data";
const Editor = () => {
  return (
    <>
      <Dashboardlayout>
        <main className="bg-dashfix min-h-screen">
          <div className="flex items-center justify-center w-full mx-auto">
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <RichTextEditorComponent></RichTextEditorComponent>
            </div>
          </div>
        </main>
      </Dashboardlayout>
    </>
  );
};

export default Editor;
