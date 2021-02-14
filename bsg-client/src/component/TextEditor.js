import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';



const TextEditor = ({ onChangeContent, SelectedBoard }) => {


  useEffect(() => {
  })

  // const board = SelectedBoard[0].body || []
  return (
           <div className="WriteBox">
                <CKEditor
                    editor={ ClassicEditor }
                    data={SelectedBoard ?  SelectedBoard[0].body : ''}
                    onReady={ editor => {

                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        onChangeContent(data)
                    } }
                    onBlur={ ( event, editor ) => {
                    } }
                    onFocus={ ( event, editor ) => {
                    } }
                />
            </div>
  )
}


export default TextEditor