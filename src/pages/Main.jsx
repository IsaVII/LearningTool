import learningContent from "../data/learningContent.json";
import TopicCard from "../components/TopicCard";

function Main() {
  return (
    <>
      <section className="flex flex-col items-center text-center py-2 mb-12">
        <h1 className="text-4xl mb-2 text-heading">
          Welcome to the WebDev Playground
        </h1>
        <p className="text-lg text-muted w-2/3">
          Get an overview over modern web development concepts through
          interactive learning or use the playground as a cheat sheet.
        </p>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-3xl mb-8 text-heading">Available Topics</h2>
        <div className="w-full max-w-210 justify-self-center grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {learningContent.topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
