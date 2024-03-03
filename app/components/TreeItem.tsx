"use client"
import React, { useState, FC } from 'react';
import { TreeItemProps, TreeViewProps } from '../@types';
import { Arrow } from '../icons';

const TreeItem: React.FC<TreeItemProps> = ({ node, isSelected, selectedId, onItemSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    if (node.children && node.children.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='text-black pl-8'>
      <div
        onClick={toggleOpen}
        className={`cursor-pointer ${node.children ? 'font-bold' : 'font-normal'} ${isSelected ? 'bg-blue-100' : 'bg-transparent'}`}
      >
        <div className='flex flex-row items-center gap-2 p-2'>
          <span className={`mr-2 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
            <Arrow/>
          </span>
          {node.label}
        </div>
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <div
              key={child.id}
              onClick={(e) => {
                e.stopPropagation(); // 자식 요소 클릭 이벤트가 부모 요소로 전파되는 것을 방지
                onItemSelect(child.id);
              }}
              className={`cursor-pointer pl-4 p-1 ${selectedId === child.id ? 'bg-gray-200' : 'bg-transparent'}`}
            >
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeItem;

