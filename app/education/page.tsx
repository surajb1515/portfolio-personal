import EducationComponent from "@/components/Education-Component";



function wait(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}




export default async function Education({ }: {}) {

  // await wait(4000)


  return (
    <div className="container max-w-3xl pt-20">
      <EducationComponent />
    </div>
  );
}
