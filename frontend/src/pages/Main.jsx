import { Link } from "react-router-dom";
import learningContent from "../data/learningContent.json";

function Main() {
  return (
    <>
      <section className="text-center py-12 mb-12">
        <h1 className="text-4xl mb-4 text-slate-700">
          Welcome to Learning Tool
        </h1>
        <p className="text-lg text-gray-500">
          Master modern web development concepts through interactive learning
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-3xl mb-8 text-slate-700">Available Topics</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-200 ">
          {learningContent.topics.map((topic) => (
            <Link
              key={topic.id}
              to={topic.route}
              className="bg-white border border-gray-200 rounded-lg p-6 no-underline text-inherit transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="m-0 text-slate-700">{topic.title}</h3>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {topic.difficulty}
                </span>
              </div>
              <p className="text-gray-500 my-4">{topic.description}</p>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>⏱️ {topic.estimatedTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
