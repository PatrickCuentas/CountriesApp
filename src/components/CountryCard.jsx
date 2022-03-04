import { Link } from 'react-router-dom'

function CountryCard(country) {
  const { name, population, region, capital, flags } = country
  const { common } = name
  const { png } = flags

  return (
    <div className="bg-white dark:bg-dark-blue dark:text-white rounded-xl shadow-lg dark:shadow-2xl">
      <div>
        <Link to={`/${common.toLowerCase()}`}>
          <img
            className="rounded-t-xl aspect-video w-full"
            src={png}
            alt={common}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3 px-5 py-8">
        <h2 className="text-2xl font-bold">{common}</h2>
        <div>
          {[
            ['Population', new Intl.NumberFormat().format(population)],
            ['Region', region],
            ['Capital', capital],
          ].map(([title, content]) => (
            <p className="text-lg font-semibold" key={title}>
              {title}: <span className="font-normal">{content}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryCard