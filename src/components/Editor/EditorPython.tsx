import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import AceEditor from "react-ace";

interface IEditorProps {
  var_script?: string | null;
  setVarScript: (value: string) => void;
}

const EditorPython: React.FC<IEditorProps> = (props) => {
  const [code, setCode] = useState<string>("");

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <AceEditor
      mode="python"
      theme="monokai"
      value={props.var_script}
      onChange={props.setVarScript}
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
