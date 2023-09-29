import { MdPlaylistAdd } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";
import useGetAllText from "@/app/hooks/useGetAllText";



export const PostButton = () => {
  const { fetch }: any = useGetAllText()
  const defaultValue = '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"example.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = "/api/analysis";
    const createData = {
      // リクエストボディに送信するデータ
      text: defaultValue,
    };
    await axios.post(apiUrl, createData)
      .then(response => {
        toast.success('Created Naisei!!')
        fetch()
        console.log("/editorでデータをフェッチ");
        return response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  return (

    <>
      <div className="max-w-2xl mx-auto text-end focus:outline-none">
        <button onClick={onCreate} className="border-none mr-8 cursor-pointer rounded-full hover:text-blue-600 bg-white">
          <MdPlaylistAdd size={48} color="" />
        </button>
      </div>
    </>
  )
}
