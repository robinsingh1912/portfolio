import Data from './data.json';

export default function AboutSection() {
  return (
    <section id="about" className={`container mt-16`}>
      <h2 className="font-semibold font-mono text-2xl">About</h2>
      <article className="max-w-2xl mt-3 gap-4 grid">
        <p>
          Hi there! <span className="text-2xl">👋</span>, I’m{' '}
          <span className="bg-pink-600 p-1">Robin Singh</span>! from New Delhi,
          India, a passionate self-taught{' '}
          <span className="underline underline-offset-2">
            Full-Stack Engineer
          </span>{' '}
          with over 5 years of experience. I take pride in writing clean,
          reusable code and optimizing performance to deliver exceptional user
          experiences. I have successfully delivered projects with impeccable
          code quality.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="flex flex-wrap gap-10">
          {Data.map((technologies) => (
            <ul>
              <p className="underline underline-offset-4">
                {technologies.title}
              </p>
              {technologies.technologies.map((technology) => (
                <li>{technology}</li>
              ))}
            </ul>
          ))}
        </div>
      </article>
    </section>
  );
}
