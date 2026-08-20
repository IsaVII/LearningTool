function Redux() {
  return (
    <>
      <h1 className="text-4xl text-slate-700 mb-4">Redux Fundamentals</h1>

      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl text-slate-700 mt-8 mb-4">What is Redux?</h2>
        <p className="text-gray-500 leading-relaxed mb-4">
          Redux is a predictable state container for JavaScript applications. It
          helps you write applications that behave consistently and are easy to
          test.
        </p>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Core Concepts</h3>
        <ul className="text-gray-500 leading-relaxed pl-6">
          <li className="mb-2">
            <strong>Store:</strong> Single source of truth for your app state
          </li>
          <li className="mb-2">
            <strong>Actions:</strong> Plain objects describing what happened
          </li>
          <li className="mb-2">
            <strong>Reducers:</strong> Pure functions that return new state
          </li>
          <li className="mb-2">
            <strong>Selectors:</strong> Functions to extract state slices
          </li>
        </ul>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Redux Toolkit</h3>
        <p className="text-gray-500 leading-relaxed mb-4">
          Redux Toolkit simplifies Redux development by providing helpful
          utilities like configureStore and createSlice that reduce boilerplate
          code.
        </p>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Getting Started</h3>
        <ol className="text-gray-500 leading-relaxed pl-6">
          <li className="mb-2">Create a Redux store with configureStore</li>
          <li className="mb-2">Create slices to define reducers and actions</li>
          <li className="mb-2">Use useSelector to read state in components</li>
          <li className="mb-2">Use useDispatch to dispatch actions</li>
        </ol>

        <h3 className="text-2xl text-slate-800 mt-6 mb-3">Practice Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Basic Store Setup</h4>
            <p className="m-0 text-sm text-gray-500">
              Learn how to configure a Redux store
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Creating Slices</h4>
            <p className="m-0 text-sm text-gray-500">
              Understand Redux Toolkit slices
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Using Hooks</h4>
            <p className="m-0 text-sm text-gray-500">
              Master useSelector and useDispatch
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded transition-all duration-300 hover:bg-gray-100 hover:translate-x-1">
            <h4 className="m-0 mb-2 text-slate-700">Async Operations</h4>
            <p className="m-0 text-sm text-gray-500">
              Handle async logic with thunks
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Redux;
