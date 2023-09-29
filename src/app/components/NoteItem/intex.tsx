"use client"

import useRefresh from "@/app/hooks/useRefresh";
import { useToggleEditor } from "@/app/hooks/useToggleEditor";
import { MdKeyboardBackspace } from "react-icons/md";


import { Editor } from "../Editor/text-editor";
import { PostButton } from "../PostButton";
import { Note } from "../Note";

export const NoteItem = () => {
  const { refresh } = useRefresh();
  const { isOpen, onClose, onOpen } = useToggleEditor()
  return (
    <>
      {
        isOpen ?
          <div className="max-w-3xl mx-auto">
            < div className="flex justify-start ml-4" >
              <button
                className="border-none cursor-pointer bg-white hover:text-blue-400"
                onClick={() => onClose()}
              >
                <MdKeyboardBackspace size={24} />
              </button>
            </div >
            {!refresh ?
              <>
                <Editor />
              </>
              :
              <div></div>
            }

          </div >
          :
          <>
            <PostButton />
            <div onClick={() => onOpen()}>
              <Note />
            </div>
          </>
      }

    </>
  )
}