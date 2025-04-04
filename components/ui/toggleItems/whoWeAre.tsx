'use client';
import React, { useRef, useEffect } from 'react';
import { ToggleItemProps } from './toggleItemTypes';

function WhoWeAreToggleItem({ isOpen, setOpen }: ToggleItemProps) {
  const toggleRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen("WHO WE ARE");
  };

  useEffect(() => {
    if (toggleRef.current) {
      toggleRef.current.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(-90deg)';
    }
  }, [isOpen]);

  return (
    <div className="toggle-item flex items-center mb-2 border rounded h-20 overflow-hidden">
      <div
        className="toggle-button-container w-full h-full p-4 cursor-pointer flex items-center justify-between"
        onClick={toggleOpen}
      >
        <span className="truncate">WHO WE ARE</span>
        <span
          className="toggle-icon text-2xl font-bold transition-transform duration-300"
          ref={toggleRef}
        >
          {isOpen ? ' - ' : ' + '}
        </span>
      </div>
    </div>
  );
}

export default WhoWeAreToggleItem;