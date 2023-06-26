

export const IndustryCard = ({head,detail}) => {
  return (
    <div>
        
        <div className="block md:w-96 w-full mb-3 h-full p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 h-16 text-2xl font-bold tracking-tight  ">{head}</h5>
            <p className="text-sm text-gray-400 ">{detail}</p>
        </div>

    </div>
  )
}
