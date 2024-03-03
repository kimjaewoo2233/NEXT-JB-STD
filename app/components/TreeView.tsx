"use client"

import { useState } from "react";
import { TreeItemNode, TreeViewProps } from "../@types";
import TreeItem from "./TreeItem";

const TreeView: React.FC<{ data: TreeItemNode[] }> = ({ data }) => {

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  }

  return (
    <div>
      {data.map((item) => (
        <TreeItem 
          key={item.id} 
          node={item}
          isSelected={selectedId === item.id}
          onItemSelect={handleItemClick}
          selectedId={selectedId!}  
        />
      ))}
    </div>
  );
};
  
  export default TreeView;