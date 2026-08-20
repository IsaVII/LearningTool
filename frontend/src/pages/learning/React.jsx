function React() {
  return (
    <>
      <h1 className="text-4xl text-slate-700 mb-4">React Fundamentals</h1>

      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl text-slate-700 mt-8 mb-4">What is React?</h2>
        <p className="text-gray-500 leading-relaxed mb-4">
          React is a JavaScript library for building user interfaces with
          reusable components. It makes creating interactive UIs painless by
          managing component state and rendering efficiently.
        </p>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Core Concepts</h3>
        <ul className="text-gray-500 leading-relaxed pl-6">
          <li className="mb-2">
            <strong>Components:</strong> Reusable pieces of UI
          </li>
          <li className="mb-2">
            <strong>JSX:</strong> Syntax extension for writing UI
          </li>
          <li className="mb-2">
            <strong>Props:</strong> Pass data to components
          </li>
          <li className="mb-2">
            <strong>State:</strong> Manage component data
          </li>
          <li className="mb-2">
            <strong>Hooks:</strong> Add functionality to function components
          </li>
        </ul>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">React Hooks</h3>
        <p className="text-gray-500 leading-relaxed mb-4">
          Hooks let you use state and other React features in function
          components. Common hooks include useState, useEffect, useContext, and
          useReducer.
        </p>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Getting Started</h3>
        <ol className="text-gray-500 leading-relaxed pl-6">
          <li className="mb-2">Create components with JSX</li>
          <li className="mb-2">Use useState to manage state</li>
          <li className="mb-2">Use useEffect for side effects</li>
          <li className="mb-2">Pass props between components</li>
          <li className="mb-2">Compose components together</li>
        </ol>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Practice Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Components & JSX</h4>
            <p className="m-0 text-sm text-gray-500">
              Learn to create and render components
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Props & State</h4>
            <p className="m-0 text-sm text-gray-500">
              Manage data flow in components
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Hooks</h4>
            <p className="m-0 text-sm text-gray-500">Master React hooks</p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Performance</h4>
            <p className="m-0 text-sm text-gray-500">
              Optimize React applications
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default React;
