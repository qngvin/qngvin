import { formatMonthYear } from "@/utils/date"
import { WorkType } from "../work.type"

export const WorkDetail: React.FC<WorkType> = ({ company, startDate, endDate, position, linkUrl, projectName, isProject, isDoing }) => {
  return (
    <div className="flex flex-col gap-1 font-montserrat">
      <p className="text-white uppercase  text-4xl font-extralight tracking-tight">{position || projectName} </p>
      {!isProject ? (
        <p className="text-sm text-gray-400 tracking-tighter font-medium">
          @ <a className="text-sm underline" href={linkUrl}>{company}</a>
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}{' - '} {isDoing ? 'Present' : formatMonthYear(endDate)}
        </p>
      ) : (
        <p className="text-sm text-gray-400 tracking-tighter font-medium">
          <a className="text-sm underline" href={linkUrl}>View Project</a>
          <span className="text-xs"> {' / '} </span>
          {formatMonthYear(startDate)}{' - '}{formatMonthYear(endDate)}
        </p>
      )}
      <p className="text-white text-sm font-medium">Developed an ERP system using the PERN stack (PostgreSQL, Express, React, Node.js) to streamline business operations for a Malaysian company.</p>
    </div>
  )
}
