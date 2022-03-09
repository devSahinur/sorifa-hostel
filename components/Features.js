import React from 'react'

function Features() {
  return (
    <li className="flex items-center">
      <div className="mr-2">
        <svg
          className="text-deep-purple-accent-400 h-4 w-4"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLidth="2"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            points="6,12 10,16 18,8"
          />
          <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
        </svg>
      </div>
      <p className="font-medium text-gray-800">Global CDN</p>
    </li>
  )
}

export default Features
