
interface CommonProps {
    className?: string;
}

export type TreeItemProps = CommonProps & {
    node: TreeItemNode;
    isSelected: boolean;
    selectedId: string;
    onItemSelect: (id: string) => void;
};
  
export type TreeItemNode = CommonProps & {
    id: string;
    label: string;
    children?: TreeItemNode[];
};
  
export type TreeViewProps = CommonProps & {
    data: TreeItemNode[];
};