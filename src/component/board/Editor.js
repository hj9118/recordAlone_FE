import ReactQuill from 'react-quill';
import { useCallback, useEffect, useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@mui/material';

const Editor = ({ content, setContent }) => {
  const [modules, setModules] = useState({});
  const editorContent = useMemo(() => content, [content]);
  const setEditorContent = useCallback(
    (value) => setContent(value),
    [setContent]
  );
  useEffect(() => {
    setModules({
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
      ],
    });
  }, []);

  const onChange = ({ content }) => {
    setEditorContent(content);
  };

  return (
    <Box sx={{ mt: 3, mb: 1 }}>
      <ReactQuill
        style={{ height: '500px', marginBottom: '50px' }}
        value={editorContent}
        onChange={onChange}
        modules={modules}
        theme='snow'
        placeholder='본 커뮤니티의 이용 방침에 어긋난 게시글을 작성할 경우 제제 및 게시글 무통보 삭제될 수 있습니다.'
      />
    </Box>
  );
};

export default Editor;
