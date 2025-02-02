import React from 'react'

const Projects = () => {
  return (
    <div>
    <h2 className="text-2xl font-semibold text-blue-300">Projects</h2>
    <ul className="mt-2 space-y-4 text-gray-300">
      <li className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-blue-200">CMMS Inventory Management</h3>
        <p>A micro frontend application for shop floor inventory management.</p>
      </li>
      <li className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-bold text-blue-200">Laser World</h3>
        <p>React project for CNC and laser machine services and sales.</p>
      </li>
    </ul>
  </div>
  )
}

export default Projects