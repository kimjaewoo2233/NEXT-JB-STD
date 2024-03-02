import { TreeViewProps } from "../@types";
import TreeItem from "./TreeItem";

const TreeView = ({ data }: TreeViewProps) => {
    return (
      <div className="bg-gray-100 p-4">
        {data.map((treeItem) => (
          <TreeItem {...treeItem} key={treeItem.label} />
        ))}
      </div>
    );
  };
  
  export default TreeView;