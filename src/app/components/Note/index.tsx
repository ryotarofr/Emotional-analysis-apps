"use client"

import { useEffect, useState } from "react";
import useRefresh from "@/app/hooks/useRefresh";
import useGetAllText from "@/app/hooks/useGetAllText";
import { useGetTextById } from "@/app/hooks/useGetTextById";

export const Note = () => {
  const [text, setText] = useState([])
  const { toggleRefresh } = useRefresh()
  const { data, loading }: any = useGetAllText()

  useEffect(() => {
    const resText = data.map((item: any) => item.text)
    const newArray = resText.map((item: any) => {
      const parsedItem = JSON.parse(item); // JSON文字列をJavaScriptオブジェクトに変換
      return parsedItem.root.children[0].children[0].text; // textの値を抽出
    });

    async function processData() {
      const replacedData: any = [];
      for (let i = 0; i < data.length; i++) {
        const item = { ...data[i] };
        try {
          const textObj = JSON.parse(item.text);
          if (textObj.root && textObj.root.children && textObj.root.children[0] && textObj.root.children[0].children) {
            const textValue = textObj.root.children[0].children[0].text;
            if (textValue === newArray[i]) {
              item.text = newArray[i];
            }
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
        replacedData.push(item);
      }
      const newCreatedAt = replacedData.map((item: any) => {
        return {
          id: item.id,
          text: item.text,
          created_at: item.created_at.split('T')[0] // 日付部分だけを取得
        };
      });
      newCreatedAt.sort((a: any, b: any) => b.id - a.id); //日付を降順にならべ替え
      setText(newCreatedAt)

    }
    processData();
  }, [data, setText])

  const handleItemClick = (textId: number) => {
    useGetTextById.getState().setSelectedId(textId);
    toggleRefresh();
    let timeoutId = setTimeout(() => {
      // Editorのstateを更新
      toggleRefresh();
    }, 100)
    return () => {
      clearTimeout(timeoutId)
    }
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="max-w-2xl">
        {!loading
          ?
          <>
            {text.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="my-2 rounded-md cursor-pointer px-2"
              >
                <div className="text-start text-3xl break-words whitespace-pre-wrap">{item.text}</div>
                <div className="text-slate-400 text-end">{item.created_at}</div>
              </div>
            )
            )}
            {text.length <= 0 && <div className="text-lg">Make a post now!</div>}
          </>
          :
          <div>loading.....</div>
        }
      </div>
    </div>
  )
}