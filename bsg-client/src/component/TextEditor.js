import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';



const TextEditor = ({ onChangeContent, SelectedBoard }) => {


  useEffect(() => {
    console.log(SelectedBoard)
  })

  // const board = SelectedBoard[0].body || []
  return (
           <div className="WriteBox">
                <CKEditor
                    editor={ ClassicEditor }
                    data={SelectedBoard ?  SelectedBoard[0].body : ''}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        onChangeContent(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
  )
}


export default TextEditor