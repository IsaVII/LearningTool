import CodeBlock from "./CodeBlock";
import ContentCard from "./ContentCard";

/**
 * Shared page layout for every cheat sheet under src/pages/cheatsheets/.
 * Mirrors the pattern used for learning topics (see LearningTopicLayout):
 * each page is just its content JSON plus a call to this component, so the
 * heading sizes, spacing, and section order live here once.
 *
 * Unlike a learning topic, a cheat sheet isn't trying to teach the "why" in
 * depth or offer interactive practice - it's an ordered, "how to do it"
 * checklist someone follows while actually doing the task. So instead of
 * core concepts + practice topics, the centerpiece is a numbered list of
 * `steps`, each optionally paired with a command/code snippet, a short
 * callout note, or a list of sub-steps (for steps that are themselves a
 * short click-through, like a settings page).
 */
function CheatSheetLayout({
  title,
  introduction,
  prerequisites = [],
  steps = [],
  folderStructure,
  backendSetup,
  whatYouMightBeMissing,
  gettingStarted,
  source,
}) {
  return (
    <>
      <h1 className="text-4xl text-heading mb-4">{title}</h1>

      <ContentCard>
        <div className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 mb-3">
          <h2 className="text-3xl text-heading mt-8 mb-4">
            {introduction.heading}
          </h2>
          <p className="text-muted leading-relaxed mb-4 text-left">
            {introduction.description}
          </p>
        </div>

        {prerequisites.length > 0 && (
          <div className="bg-content2 w-full border-l-4 border-content2-border p-3 pl-5 mb-3">
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              Prerequisites
            </h3>
            <ul className="text-muted leading-relaxed text-left list-disc pl-5">
              {prerequisites.map((item) => (
                <li key={item} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4 mb-3">
          {steps.map((step, index) => (
            <div
              key={step.id ?? index}
              className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 md:pr-5"
            >
              <h3 className="text-2xl text-heading-alt mt-2 mb-3 flex items-baseline gap-3">
                <span className="text-accent font-bold">
                  {step.id ?? index + 1}.
                </span>
                {step.title}
              </h3>

              {step.description && (
                <p className="text-muted leading-relaxed mb-4 text-left">
                  {step.description}
                </p>
              )}

              {step.code && (
                <div className="mb-4">
                  <CodeBlock highlightLines={step.highlightLines}>
                    {step.code}
                  </CodeBlock>
                </div>
              )}

              {step.substeps && step.substeps.length > 0 && (
                <ol className="text-muted leading-relaxed pl-6 text-left mb-4 list-decimal ">
                  {step.substeps.map((substep, substepIndex) => (
                    <li key={substepIndex} className="mb-2 ">
                      {substep}
                    </li>
                  ))}
                </ol>
              )}

              {step.note && (
                <p className="bg-content2 border-l-4 border-content2-border text-muted text-sm p-3 pl-4 leading-relaxed text-left">
                  {step.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {folderStructure && (
          <div className="bg-content2 w-full border-l-4 border-content2-border p-3 pl-5 mb-3">
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {folderStructure.heading}
            </h3>
            {folderStructure.description && (
              <p className="text-muted leading-relaxed mb-3 text-left">
                {folderStructure.description}
              </p>
            )}
            <pre className="bg-surface text-muted text-sm p-3 rounded overflow-x-auto text-left">
              <code>{folderStructure.structure}</code>
            </pre>
          </div>
        )}

        {backendSetup && (
          <div className="bg-content1 w-full border-l-4 border-content1-border p-3 pl-5 mb-3">
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {backendSetup.heading}
            </h3>
            {backendSetup.description && (
              <p className="text-muted leading-relaxed mb-4 text-left">
                {backendSetup.description}
              </p>
            )}
            <div className="flex flex-col gap-3">
              {backendSetup.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-content2 border-l-4 border-content2-border p-3 pl-4"
                >
                  <p className="text-heading-alt font-semibold text-sm mb-2">
                    {step.step}
                  </p>
                  <CodeBlock>{step.code}</CodeBlock>
                </div>
              ))}
            </div>
          </div>
        )}

        {whatYouMightBeMissing && (
          <div className="bg-content2 w-full border-l-4 border-content2-border p-3 pl-5 mb-3">
            <h3 className="text-2xl text-heading-alt mt-6 mb-3">
              {whatYouMightBeMissing.heading}
            </h3>
            {whatYouMightBeMissing.categories.map((category, catIndex) => (
              <div key={catIndex} className="mb-4 text-left">
                <h4 className="text-heading font-semibold mb-2">
                  📦 {category.title}
                </h4>
                <ul className="text-muted text-sm pl-5 list-disc space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="bg-content2 w-full border-l-4 border-content2-border p-3 pl-5 mb-3">
          <h3 className="text-2xl text-heading-alt mt-6 mb-3">
            {gettingStarted.heading}
          </h3>
          <ol className="text-muted leading-relaxed pl-6 text-left">
            {gettingStarted.steps.map((step, index) => (
              <li key={index} className="mb-2">
                • {step}
              </li>
            ))}
          </ol>
        </div>

        {source && (
          <p className="text-subtle text-sm mt-4">
            Based on{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              {source.label}
            </a>
          </p>
        )}
      </ContentCard>
    </>
  );
}

export default CheatSheetLayout;
