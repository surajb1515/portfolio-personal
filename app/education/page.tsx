export default function Education({ }: {}) {
  return (
    <section className='pb-24'>
      <div className='max-w-3xl'>
        <h2 className='title mb-12 font-serif'>Education</h2>

        <div className=" space-y-8 font-inter">
          {/* College Education */}
          <div>
            <h3 className="text-xl font-semibold">
              National Institute of Technology Kurukshetra, Haryana
            </h3>
            <p className="text-muted-foreground ">
              Bachelor of Technology (B.Tech), Mechanical Engineering
            </p>
            <p className="text-muted-foreground text-sm">
              2021 – 2025 | CGPA: 8.1
            </p>
          </div>

          {/* Class 12 */}
          <div>
            <h3 className="text-xl font-semibold ">
              M.D.A.V Public School, Ambala City, Haryana
            </h3>
            <p className="text-muted-foreground">
              Class 12 (CBSE)
            </p>
            <p className="text-muted-foreground text-sm">
              2020 – 2021 | Percentage: 94.8%
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
