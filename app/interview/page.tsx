import { TreeItemNode } from "../@types";
import Logo from "../components/Logo";
import TreeView from "../components/TreeView";
import { InterviewPerson } from "../icons";

const treeData: TreeItemNode[] = [
    {
      id: '1',
      label: '프론트엔드',
      children: [
        { id: '2', label: 'React' },
        { id: '3', label: 'Vue' },
        { id: '4', label: 'CSS' }
      ]
    },
    {
      id: '5',
      label: '백엔드',
      children: [
        { id: '6', label: 'Spring' },
        { id: '7', label: 'Molecular' },
        { id: '8', label: 'Docker' }
      ]
    },
    {
      id: '9',
      label: '언어',
      children: [
        { id: '10', label: 'Java' },
        { id: '11', label: 'Typescript' },
        { id: '12', label: 'JS' }
      ]
    }
  ];
  
  
  export default function Home({searchParams}: { searchParams:any}) {
    return (
      <div className="flex flex-col">
       
        <div className="flex flex-row">
            <div className="flex items-center justify-center w-[20%] bg-[#FFF] text-black text-center h-[58px] shadow-custom z-10 relative">
                <span>로그인을 해주세요.</span>
            </div>

            <div className="bg-[#FFF] w-[80%] text-black flex items-center pl-[45px]">
                <span className="flex flex-row items-center gap-2 bg-[#EFF2FA] h-[40px] w-[119px] justify-center rounded-[6px]">
                    <InterviewPerson/>
                    <span className="h-[18px] font-bold text-center test-[15px] leading-[18px] text-[#272727]">
                        면접 보기
                    </span>
                </span>
            </div>
        </div>
        <div className="bg-white w-[20%] h-[100vh]">
          <TreeView data={treeData}/>
        </div>
      </div>
    );
  }
  