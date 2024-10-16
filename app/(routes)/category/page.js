

import CategoryList from '@/app/_components/CategoryList';
import GlobalApi from '@/app/_utils/GlobalApi'


export default async function dataPage () {

    const fetchedData = await GlobalApi.getCategories();
      
  return (

    <div>
      <CategoryList lists={fetchedData} />
    </div>
  )
}


