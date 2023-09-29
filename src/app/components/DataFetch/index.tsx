"use client"


import useGetAllText from "@/app/hooks/useGetAllText";
import { useEffect } from "react";

export const DataFetch = () => {
  const { fetch }: any = useGetAllText()

  useEffect(() => {
    fetch()
    console.log("/editorでデータをフェッチ");
  }, [fetch])
  return (
    <>
    </>
  )
}