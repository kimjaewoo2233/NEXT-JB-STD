import Image from "next/image";
import { TreeItemNode } from "./@types";
import TreeView from "./components/TreeView";

const treeData: TreeItemNode[] = [
  {
    label: '프론트엔드',
    children: [
      { label: 'React' },
      { label: 'Vue' },
      { label: 'CSS' }
    ]
  }
  // 추가적인 트리 아이템들...
];

export default function Home() {
  return (
    <div>
     <TreeView data={treeData} />
    </div>
  );
}
