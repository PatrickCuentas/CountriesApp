import { InputSearch } from './InputSearch.jsx'
import { FilterSearch } from './FilterSearch.jsx'
import { useFetch } from '../hooks/useFetch.jsx'
import { endpoints } from '../data/endpoints.js'
import LoadingView from './LoadingView.jsx'
import { Suspense, lazy } from 'react'

const CountryCard = lazy(() => import('./CountryCard.jsx'))

function HomeScreen() {
  const [countriesData, setCountriesData] = useFetch(endpoints.all, [])
  const { data: countries, loading } = countriesData

  return (
    <main className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <InputSearch />
        <FilterSearch setCountriesData={setCountriesData} />
      </div>

      <section id="grid" className="mb-10 px-5 grid gap-10">
        {!loading &&
          countries.map(country => {
            return (
              <Suspense fallback={<LoadingView />} key={country.name.common}>
                <CountryCard {...country} />
              </Suspense>
            )
          })}
      </section>
    </main>
  )
}

export default HomeScreen
