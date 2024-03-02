"use client"
import React, { useState, FC } from 'react';
import { TreeItemProps, TreeViewProps } from '../@types';
import { Arrow } from '../icons';


const TreeItem = ({ label, children }: TreeItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <span
        className={`flex items-center text-gray-800 cursor-pointer ${
            hasChildren ? 'font-bold' : 'font-normal'
        }`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span className={`mr-2 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
            <Arrow/>
          </span>
        )}
        {label}
      </span>
      {hasChildren && isOpen && (
        <div className="ml-4">
          {children.map((child) => (
            <TreeItem {...child} key={child.label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeItem;

