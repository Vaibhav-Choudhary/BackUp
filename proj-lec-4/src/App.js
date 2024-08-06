import './App.css';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        console.log(output.data);
        setCourses(output.data);
      } catch (err) {
        toast.error('Something Went wrong');
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards category={category} courses={courses} />}
        </div>
      </div>
    </div>
  );
}

export default App;
