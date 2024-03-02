
interface CommonProps {
    className?: string;
}

export type TreeItemProps = CommonProps & {
    label: string;
    children?: TreeItemNode[];
};
  
export type TreeItemNode = CommonProps & {
    label: string;
    children?: TreeItemNode[];
};
  
export type TreeViewProps = CommonProps & {
    data: TreeItemNode[];
};