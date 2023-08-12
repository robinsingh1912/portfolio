export default function ExperienceSection() {
  return (
    <section id="experience" className="container mt-16">
      <h2 className="font-semibold font-mono text-2xl pb-4">Experience</h2>
      <div className="flex gap-4">
        <div className="">
          <a href="">
            <img
              src="https://media.licdn.com/dms/image/D4E0BAQFBLqu-aPvgtQ/company-logo_100_100/0/1688590236169?e=1700092800&v=beta&t=9dMk8VwuCUpxwrjrfhD91gaqpEJJ5GQ36Its-SKu3Jw"
              alt="publicis sapient logo"
              className="w-12 h-12"
            />
          </a>
        </div>
        <div className="flex flex-col">
          <h3>Senior Experience Engineer</h3>
          <small>Publicis Sapient · Full-time</small>
          <small>Jan 2023 - Present</small>
          <small>Gurugram, Haryana, India · Hybrid</small>
        </div>
      </div>
    </section>
  );
}
