import React from 'react'
import {ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
export const MessageOverlayIcon = ({itemCount}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-black" />
      {itemCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-8px',
            backgroundColor: '#e55986',
            color: 'white',
            borderRadius: '20%',
            paddingLeft: '8px',
            paddingRight:'8px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {itemCount}+
        </span>
      )}
    </div>

  )
}
