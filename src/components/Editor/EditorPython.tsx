import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import AceEditor from "react-ace";

const EditorPython: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <AceEditor
      mode="python"
      theme="monokai"
      value={code}
      onChange={handleCodeChange}
      name="python-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
      }}
      width="100%"
      height="300px"
    />
  );
};
export default EditorPython;
