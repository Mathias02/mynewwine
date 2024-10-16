
import Hero from "./_components/Hero";
import Section from "./_components/Section";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";

export default async function Home() {

  const fetchedData = await GlobalApi.getCategories();
  
  return (
    <div>
      {/*hero section */}
       <Hero />

       {/*section area*/}
       <Section />

       {/* categories */}

      <CategoryList lists={fetchedData}  />

    </div>
  );
}
